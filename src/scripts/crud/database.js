/* eslint-disable no-use-before-define */
/*
const NAME_USER = 'Nama-peserta';
const JENIS_VAKSIN = 'Jenis-vaksin';
const addData = () => {
  const user = document.getElementById('inputUser').value;
  const jenis = document.getElementById('inputVaksin').value;
  const data = makeData(user, jenis, true);
  const listFilm = document.getElementById(NAME_USER);
  listFilm.append(data);
};
const makeData = (nama, vaksin, isCompleted) => {
  const dataInfo = {
    user: nama,
    jenis: vaksin,
  };
  const userName = document.createElement('h3');
  userName.innerText = dataInfo.user;

  const jenisVaksin = document.createElement('h4');
  jenisVaksin.innerText = dataInfo.jenis;

  const userContainer = document.createElement('div');
  userContainer.classList.add('data-item');

  userContainer.append(userName, jenisVaksin);

  const container = document.createElement('div');
  container.classList.add('action');
  userContainer.append(container);

  if (isCompleted) {
    container.append(finishButton(), deleteButton());
  } else {
    container.append(undoButton(), deleteButton());
  }
  return userContainer;
};

const removeData = (dataElement) => {
  dataElement.remove();
};
const createButton = (classList, buttonText, eventListener) => {
  const button = document.createElement('button');
  button.classList.add(classList);
  button.innerText = buttonText;

  button.addEventListener('click', (event) => {
    eventListener(event);
  });
  return button;
};
const finishButton = () => createButton('btn-green', 'Selesai Divaksin', (event) => {
  const data = event.target.parentElement;
  addDataToCompleted(data.parentElement);
  removeData(data.parentElement);
});
const deleteButton = () => createButton('btn-red', 'Hapus Data', (event) => {
  const data = event.target.parentElement;
  removeData(data.parentElement);
});

const undoButton = () => createButton('btn-green', 'Belum Selesai Divaksin', (event) => {
  const data = event.target.parentElement;
  undodataCompleted(data.parentElement);
  removeData(data.parentElement);
});
const addDataToCompleted = (dataElement) => {
  const datasCompleted = document.getElementById(JENIS_VAKSIN);

  const userName = dataElement.querySelector('.data-item > h3').innerText;
  const jenisVaksin = dataElement.querySelector('.data-item > h4').innerText;

  const newData = makeData(userName, jenisVaksin, false);
  datasCompleted.append(newData);
  dataElement.remove();
};
const undodataCompleted = (dataElement) => {
  const dataUncompleted = document.getElementById(NAME_USER);

  const userName = dataElement.querySelector('.data-item > h3').innerText;
  const jenisVaksin = dataElement.querySelector('.data-item > h4').innerText;

  const newData = makeData(userName, jenisVaksin, true);
  dataUncompleted.append(newData);
  dataElement.remove();
};
export default addData;
*/