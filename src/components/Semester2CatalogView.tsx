import { ArrowLeft } from 'lucide-react';
import { materialKey, useStudyProgress } from '../hooks/useStudyProgress';
import type { Course, CourseGroup, Semester } from '../types';

interface Semester2CatalogViewProps {
  semester: Semester;
  onBack: () => void;
  onCourseClick: (course: Course) => void;
}

type CatalogGroupId = 'keahlian' | 'pendukung';

interface CatalogGroupContract {
  id: CatalogGroupId;
  title: string;
  sourceTitle: string;
  courseCodes: readonly string[];
}

interface ResolvedCatalogGroup extends CatalogGroupContract {
  courses: Course[];
}

interface CatalogCourseContract {
  description: string;
  capabilities: readonly string[];
}

const EXPECTED_COURSE_COUNT = 7;
const EXPECTED_TOTAL_SKS = 20;

const SEMESTER_2_GROUPS: readonly CatalogGroupContract[] = [
  {
    id: 'keahlian',
    title: 'Keahlian',
    sourceTitle: 'Mata Kuliah Keahlian (Akuntansi & Pajak)',
    courseCodes: ['AKK201', 'AKM201', 'PJK201', 'AKA103'],
  },
  {
    id: 'pendukung',
    title: 'Pendukung',
    sourceTitle: 'Mata Kuliah Pendukung (Bisnis & Ekonomi)',
    courseCodes: ['MNU101', 'EKT109', 'MAS122'],
  },
];

const EXPECTED_COURSE_CODES = SEMESTER_2_GROUPS.flatMap((group) => group.courseCodes);

const SEMESTER_2_COURSES: Readonly<Record<string, CatalogCourseContract>> = {
  AKK201: {
    description: 'Materi TM1–14, 84 flashcard, 33 bank soal, latihan, dan simulator UTS/UAS.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Latihan & Simulasi', 'Referensi'],
  },
  AKM201: {
    description: 'Materi TM1–14, 84 flashcard, 51 bank soal, bank rumus, dan simulator UTS/UAS.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Simulasi', 'Referensi'],
  },
  PJK201: {
    description: 'Materi TM1–14, 84 flashcard, 80 bank soal, regulasi, dan simulator UTS/UAS.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Simulasi', 'Referensi'],
  },
  AKA103: {
    description: 'Materi TM1–14, 84 flashcard, 10 bank soal, latihan kasus etika, dan referensi.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Latihan', 'Referensi'],
  },
  MNU101: {
    description: 'Materi TM1–14, 88 flashcard, 11 bank soal, latihan kasus bisnis, dan glosarium.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Latihan', 'Referensi'],
  },
  EKT109: {
    description: 'Materi TM1–14, 126 flashcard, 100 bank soal, formula, grafik, dan simulator UTS/UAS.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Simulasi', 'Referensi'],
  },
  MAS122: {
    description: 'Materi TM1–14, 84 flashcard, 5 bank soal, latihan, formula, dan notasi statistik.',
    capabilities: ['Materi', 'Flashcard', 'Bank Soal', 'Latihan', 'Referensi'],
  },
};

function hasExactCodeSet(actualCodes: readonly string[], expectedCodes: readonly string[]): boolean {
  if (actualCodes.length !== expectedCodes.length) return false;
  const actualCodeSet = new Set(actualCodes);
  return actualCodeSet.size === actualCodes.length && expectedCodes.every((code) => actualCodeSet.has(code));
}

function hasExactGroupMembership(
  actualGroups: readonly CourseGroup[],
  expectedGroups: readonly CatalogGroupContract[],
): boolean {
  if (actualGroups.length !== expectedGroups.length) return false;

  const actualTitles = actualGroups.map((group) => group.title);
  if (new Set(actualTitles).size !== actualTitles.length) return false;

  return expectedGroups.every((expectedGroup) => {
    const actualGroup = actualGroups.find((group) => group.title === expectedGroup.sourceTitle);
    if (!actualGroup) return false;
    return hasExactCodeSet(
      actualGroup.courses.map((course) => course.code),
      expectedGroup.courseCodes,
    );
  });
}

export function validateSemester2Inventory(semester: Semester): boolean {
  const actualCourses = semester.groups.flatMap((group) => group.courses);
  const actualCodes = actualCourses.map((course) => course.code);
  const actualSks = actualCourses.reduce((total, course) => total + course.sks, 0);

  const inventoryChecks = [
    semester.id === 'sem2',
    actualCourses.length === EXPECTED_COURSE_COUNT,
    new Set(actualCodes).size === actualCodes.length,
    hasExactCodeSet(actualCodes, EXPECTED_COURSE_CODES),
    actualSks === EXPECTED_TOTAL_SKS,
    actualSks === semester.totalSks,
    hasExactGroupMembership(semester.groups, SEMESTER_2_GROUPS),
  ];

  return inventoryChecks.every(Boolean);
}

function resolveCatalogGroups(semester: Semester): ResolvedCatalogGroup[] | null {
  if (!validateSemester2Inventory(semester)) return null;

  const courseByCode = new Map(
    semester.groups.flatMap((group) => group.courses).map((course) => [course.code, course]),
  );

  return SEMESTER_2_GROUPS.map((group) => ({
    ...group,
    courses: group.courseCodes.map((code) => courseByCode.get(code) as Course),
  }));
}

function getAvailableMaterials(course: Course) {
  return [...(course.materiTM1_7 ?? []), ...(course.materiTM8_14 ?? [])]
    .filter((material, index, materials) => materials.findIndex((candidate) => candidate.tm === material.tm) === index)
    .sort((left, right) => left.tm - right.tm);
}

export default function Semester2CatalogView({ semester, onBack, onCourseClick }: Semester2CatalogViewProps) {
  const { countDone, isDone } = useStudyProgress();
  const resolvedGroups = resolveCatalogGroups(semester);

  if (!resolvedGroups) {
    return (
      <section className="semester2-catalog semester2-catalog--error" role="alert">
        <button type="button" onClick={onBack} className="semester2-catalog__back">
          <ArrowLeft size={18} aria-hidden="true" /> Kembali ke beranda
        </button>
        <h1>Katalog Semester 2 tidak dapat dimuat</h1>
        <p>Inventaris mata kuliah tidak cocok dengan kontrak tujuh mata kuliah dan 20 SKS.</p>
      </section>
    );
  }

  return (
    <div className="semester2-catalog" data-catalog-pilot="semester-2">
      <button type="button" onClick={onBack} className="semester2-catalog__back">
        <ArrowLeft size={18} aria-hidden="true" /> Kembali ke beranda
      </button>

      <header className="semester2-catalog__header">
        <p className="semester2-catalog__eyebrow">Semester 2 · tujuh mata kuliah · 20 SKS</p>
        <h1>Ruang belajar</h1>
        <p className="semester2-catalog__lead">
          Mata kuliah ditampilkan sebagai indeks editorial terbuka. Progress dan langkah berikutnya mengikuti materi yang benar-benar tersedia.
        </p>
      </header>

      <div className="semester2-catalog__groups">
        {resolvedGroups.map((group) => (
          <section
            className="semester2-catalog__group"
            data-course-group={group.title}
            aria-labelledby={`semester2-${group.id}-title`}
            key={group.id}
          >
            <div className="semester2-catalog__group-heading">
              <h2 id={`semester2-${group.id}-title`}>{group.title}</h2>
              <span>{group.courses.length} mata kuliah</span>
            </div>

            <div className="semester2-catalog__grid">
              {group.courses.map((course) => {
                const contract = SEMESTER_2_COURSES[course.code];
                const materials = getAvailableMaterials(course);
                const progressKeys = materials.map((material) => materialKey(course.code, material.tm));
                const done = countDone(progressKeys);
                const firstIncomplete = materials.find((material) => !isDone(materialKey(course.code, material.tm)));
                const allComplete = materials.length > 0 && firstIncomplete === undefined;
                const nextMaterial = firstIncomplete ?? materials[0];
                const progressPct = materials.length > 0 ? Math.round((done / materials.length) * 100) : 0;
                const cta = materials.length === 0
                  ? 'Lihat ringkasan →'
                  : allComplete
                    ? 'Tinjau kembali →'
                    : done === 0
                      ? `Mulai TM ${nextMaterial.tm} →`
                      : `Lanjutkan ke TM ${nextMaterial.tm} →`;

                return (
                  <article className="semester2-course" key={course.code}>
                    <a
                      className="semester2-course__link"
                      href={`/course/${encodeURIComponent(course.code)}`}
                      onClick={(event) => {
                        event.preventDefault();
                        onCourseClick(course);
                      }}
                      data-course-code={course.code}
                      data-course-group={group.title}
                      data-capabilities={contract.capabilities.join('|')}
                    >
                      <div className="semester2-course__meta">
                        <span>{course.code} · {course.sks} SKS</span>
                        <span>{done} dari {materials.length} selesai</span>
                      </div>
                      <h3>{course.name}</h3>
                      <p className="semester2-course__description">{contract.description}</p>
                      <div className="semester2-course__progress">
                        <div
                          className="semester2-course__track"
                          role="progressbar"
                          aria-label={`Progress ${course.name}`}
                          aria-valuemin={0}
                          aria-valuemax={materials.length}
                          aria-valuenow={done}
                          aria-valuetext={`${done} dari ${materials.length} pertemuan selesai`}
                        >
                          <span className="semester2-course__fill" style={{ width: `${progressPct}%` }} />
                        </div>
                        <span className="semester2-course__cta">{cta}</span>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
