const toggleContent = ( event ) => {
  const contents = document.querySelectorAll('.content__text div');
  for(let index = 0; index < contents.length; index++ )
  {
    contents[index].classList.remove('active');
  }
  const stream = event.dataset.content;
  const text = document.getElementById(stream);
  text.classList.add('active');
}
