
const light = document.querySelector('.light');
const jab = document.querySelector('.jab_box');
const bird = document.querySelector('.bird_box');
const handle = document.querySelector('.handle');
let hat = 0;

document.querySelector('.handle_control').addEventListener('mousedown', e =>{
   if(e.target.classList.contains('handle_control')){
      handle.classList.add('handle_down');
    }
});
document.querySelector('.handle_control').addEventListener('mouseup', e=>{
   if(e.target.classList.contains('handle_control')){
     handle.classList.remove('handle_down');
   }
});

document.querySelector('.container').addEventListener('click', e => {
   if(e.target.classList.contains('curtain')){
       if (e.target.classList.contains('curtain')) {
          e.target.style.transform = "translateY(-500%)"
          e.target.style.transition = "5s";
       }
   }  else if (e.target.classList.contains('handle_control')){
         light.classList.toggle('light_on');
         document.querySelector('.visible').classList.toggle('visible-1');
         if(jab.classList.contains('animal_ishere')){
            jab.classList.remove('animal_ishere');
            jab.classList.add('animal_isnothere');
            setTimeout(()=>{jab.classList.add('nvs');},300);
         }
         if(bird.classList.contains('animal_ishere')){
            bird.classList.remove('animal_ishere');
            bird.classList.add('animal_isnothere');
            setTimeout(()=>{bird.classList.add('nvs');},300);
         }
      hat = 0;
   } else if (e.target.classList.contains('hat_box-1') && hat == 0) {
      jab.classList.remove('nvs');
      jab.classList.remove('animal_isnothere');
      jab.classList.add('animal_ishere');
      hat = 1;
   } else if(e.target.classList.contains('animal_box-1') && hat==1){
      if (document.querySelector('.visible').classList.contains('visible-1')){
         if(jab.classList.contains('animal_ishere')){
            jab.classList.add('animal_isnothere');
            jab.classList.remove('animal_ishere');
            setTimeout(()=>{
               jab.classList.add('nvs');
               bird.classList.remove('animal_isnothere');
               bird.classList.add('animal_ishere');
               bird.classList.remove('nvs');
            }, 250);
         } else if(bird.classList.contains('animal_ishere')){
            bird.classList.add('animal_isnothere');
            bird.classList.remove('animal_ishere');
            setTimeout(()=>{
               bird.classList.add('nvs');
               jab.classList.remove('animal_isnothere');
               jab.classList.add('animal_ishere');
               jab.classList.remove('nvs');
            }, 250);
         }
      }
   }
});
