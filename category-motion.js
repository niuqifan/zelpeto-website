// Keep native links and keyboard navigation. Clip zoom to the photo, not the label.
document.querySelectorAll('#categories .category-card').forEach(card=>{
 const img=card.querySelector('img');
 if(!img||img.parentElement.classList.contains('category-image-frame'))return;
 const frame=document.createElement('span');frame.className='category-image-frame';
 img.before(frame);frame.append(img);
});
