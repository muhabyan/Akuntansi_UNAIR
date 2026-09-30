/** Original teaching illustrations of BPMN 2.0 shapes, not a complete process model. */
export const BPMN_SYMBOLS = `<svg class="course-diagram-svg" viewBox="0 0 960 365" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <rect x="1" y="1" width="958" height="363" rx="18" fill="#fff" stroke="#cbd5e1"/>
  <text x="28" y="38" fill="#0f172a" font-size="20" font-weight="700">Baca bentuk sebelum membaca label</text>
  <g fill="#f8fafc" stroke="#cbd5e1"><rect x="24" y="64" width="292" height="126" rx="14"/><rect x="334" y="64" width="292" height="126" rx="14"/><rect x="644" y="64" width="292" height="126" rx="14"/><rect x="24" y="206" width="292" height="126" rx="14"/><rect x="334" y="206" width="292" height="126" rx="14"/><rect x="644" y="206" width="292" height="126" rx="14"/></g>
  <circle cx="80" cy="116" r="23" fill="#fff" stroke="#0369a1" stroke-width="2.5"/>
  <rect x="365" y="94" width="82" height="45" rx="12" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M700 91 L725 116 L700 141 L675 116 Z" fill="#fff7ed" stroke="#b45309" stroke-width="2.5"/>
  <path d="M52 229 H94 L109 244 V290 H52 Z M94 229 V244 H109" fill="#fff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M365 243 V280 Q406 297 447 280 V243" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/><ellipse cx="406" cy="243" rx="41" ry="11" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M671 245 H746" stroke="#0369a1" stroke-width="2.5" fill="none"/><path d="M671 275 H746" stroke="#b45309" stroke-width="2.5" stroke-dasharray="6 5"/><path d="M746 245 l-9 -6 v12 z" fill="#0369a1"/><circle cx="671" cy="275" r="3.5" fill="#fff" stroke="#b45309" stroke-width="2"/><path d="M746 275 l-8 -5 v10 z" fill="#fff" stroke="#b45309" stroke-width="2"/>
  <g fill="#0f172a" font-size="16" font-weight="700"><text x="120" y="107">Event</text><text x="463" y="107">Task</text><text x="743" y="107">Gateway</text><text x="124" y="248">Data Object</text><text x="463" y="248">Data Store</text><text x="766" y="247">Sequence</text><text x="766" y="278">Message</text></g>
  <g fill="#475569" font-size="13"><text x="120" y="130">Sesuatu terjadi</text><text x="463" y="130">Pekerjaan dilakukan</text><text x="743" y="130">Alur bercabang</text><text x="124" y="272">Data saat proses</text><text x="463" y="272">Data tersimpan</text><text x="766" y="302">Solid / putus-putus</text></g>
  <text x="28" y="351" fill="#475569" font-size="12">Start = lingkaran tipis; end = lingkaran tebal. Jenis gateway diberi penanda X, O, atau +.</text>
</svg>`;

export const BPMN_SYMBOLS_MOBILE = `<svg class="course-diagram-svg" viewBox="0 0 360 682" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;font-family:Inter,Arial,sans-serif">
  <rect x="1" y="1" width="358" height="680" rx="14" fill="#fff" stroke="#cbd5e1"/>
  <text x="16" y="30" fill="#0f172a" font-size="18" font-weight="700">Bentuk punya arti</text>
  <g fill="#f8fafc" stroke="#cbd5e1"><rect x="12" y="46" width="336" height="94" rx="12"/><rect x="12" y="149" width="336" height="94" rx="12"/><rect x="12" y="252" width="336" height="94" rx="12"/><rect x="12" y="355" width="336" height="94" rx="12"/><rect x="12" y="458" width="336" height="94" rx="12"/><rect x="12" y="561" width="336" height="94" rx="12"/></g>
  <circle cx="66" cy="93" r="21" fill="#fff" stroke="#0369a1" stroke-width="2.5"/>
  <rect x="35" y="178" width="64" height="36" rx="10" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M66 276 L90 300 L66 324 L42 300 Z" fill="#fff7ed" stroke="#b45309" stroke-width="2.5"/>
  <path d="M40 377 H77 L91 391 V426 H40 Z M77 377 V391 H91" fill="#fff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M35 487 V518 Q66 532 97 518 V487" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/><ellipse cx="66" cy="487" rx="31" ry="9" fill="#eff6ff" stroke="#0369a1" stroke-width="2.5"/>
  <path d="M34 591 H100" stroke="#0369a1" stroke-width="2.5"/><path d="M34 621 H100" stroke="#b45309" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M100 591 l-8 -5 v10 z" fill="#0369a1"/><circle cx="34" cy="621" r="3" fill="#fff" stroke="#b45309" stroke-width="2"/><path d="M100 621 l-8 -5 v10 z" fill="#fff" stroke="#b45309" stroke-width="2"/>
  <g fill="#0f172a" font-size="16" font-weight="700"><text x="120" y="85">Event</text><text x="120" y="188">Task</text><text x="120" y="291">Gateway</text><text x="120" y="394">Data Object</text><text x="120" y="497">Data Store</text><text x="120" y="599">Sequence / Message</text></g>
  <g fill="#475569" font-size="13"><text x="120" y="108">Mulai / selesai</text><text x="120" y="211">Pekerjaan dilakukan</text><text x="120" y="314">Cabang atau gabung</text><text x="120" y="417">Data selama proses</text><text x="120" y="520">Data tersimpan</text><text x="120" y="625">Solid / putus-putus</text></g>
  <text x="16" y="672" fill="#475569" font-size="11">End event bergaris tebal; gateway memakai X, O, atau +.</text>
</svg>`;
