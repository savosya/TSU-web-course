const $ = {}
window.$ = $;
var title;


function createModal(options){
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-close" onclick="modal.close()">&times;</div>
        <h1 class="modal-header">${title}</h1>
        <div class="modal-body-title">${title}</div><div class="modal-body"> : Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias.<br>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptatecorrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus
          ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni
          molestias recusandae id libero vitae, repudiandae praesentium.</div>
      </div>
    </div>
  `)
  document.body.appendChild(modal);
  return modal;
}

$.modal = function(options) {
  const modal = createModal(options);
  return {
    open() {
      modal.classList.add('open');
    },
    close() {
      modal.classList.remove('open');
    }
  }
}

const modal = $.modal();


document.body.addEventListener("click", e => {
  if (e.target.classList.contains('click')) {
    title=e.target.value;
    document.querySelector('.modal-header').textContent=title;
    document.querySelector('.modal-body-title').textContent=title;
  }
});

