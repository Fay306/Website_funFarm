// JavaScript Document
coverflowimages({
 coverid: 'coverflow1',
 images: [
  ['placeholder.jpg', 'placeholder.jpg', 'Angelina Jolie, is an American actress ...'],
  ['placeholder.jpg', 'placeholder.jpg', 'Born and immigrated with her parents to the United States when she\'s five...'],
  ['placeholder.jpg', 'placeholder.jpg'],
  ['placeholder.jpg', 'placeholder.jpg', 'Hayden Panettiere is a native of New York..'],
  ['placeholder.jpg', 'placeholder.jpg', 'Ashley was born in California...'] // <-- no comma after last image
 ],
 onselecteditemclick(e, selectedindex){
  alert("You selected image # " + selectedindex)
 } // <-- no comma after last option
})