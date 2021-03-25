import tableTpl from '../templates/video-links.hbs';

export default class RenderTable {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;
    this.sortDirection = 1;
    this.sortProperty = '';
    // this.sortByProperty('date');
  }

  sortByProperty(property) {
    this.sortDirection *= -1;
    this.data.sort((a, b) => {
      if (a[property] > b[property]) return this.sortDirection;
      if (a[property] < b[property]) return -this.sortDirection;
    });
  }

  renderTable() {
    const markup = tableTpl(this.data);
    this.selector.innerHTML = markup;
    this.setHeaderClicker();
  }

  setHeaderClicker() {
    const headerRef = document.querySelector('.head');
    headerRef.addEventListener('click', event => {
      if (
        event.target.textContent !== 'Date' &&
        event.target.textContent !== 'Author'
      )
        return;
      this.sortProperty = event.target.textContent.toLowerCase();
      this.sortByProperty(this.sortProperty);
      this.renderTable();
    });
  }

  // onHeaderClick(event) {
  //   if (
  //     event.target.textContent !== 'Date' &&
  //     event.target.textContent !== 'Author'
  //   )
  //     return;
  //   this.property = event.target.textContent;
  //   console.log(this.property);
  // }
}
