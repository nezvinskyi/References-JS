import data from './data/video.json';
import RenderTable from './js/render-table';
import './css/styles.css';
import getRefs from './get-refs';

const refs = getRefs();
const videoLinks = new RenderTable(refs.table, data);

videoLinks.renderTable();

// refs.table.addEventListener('click', onTableClick);

// function onTableClick(event) {
//   if (event.target.textContent !== 'Date') return;
//   console.log(event.target.textContent);
// }
