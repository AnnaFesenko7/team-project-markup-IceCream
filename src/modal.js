(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mob-menu-open]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
refs. openMobMenuBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-map-open]'),
		closeModalBtn: document.querySelector('[data-map-close]'),
		modal: document.querySelector('[data-map]'),
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		document.body.classList.toggle('map-open');
		refs.modal.classList.toggle('is-hidden');
	}
})();

(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-franchise-open]'),
		closeModalBtn: document.querySelector('[data-franchise-close]'),
		modal: document.querySelector('[data-franchise]'),
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		document.body.classList.toggle('franchise-open');
		refs.modal.classList.toggle('is-hidden');
	}
})();


