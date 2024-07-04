
//...................start swiper story..............
let swiper = new Swiper(".myswiper",{
    slidesPerView:6,
    spaceBetween:5,
})



//...........window scroll............................


window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none'
    
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
        document.querySelector('.notification-box').style.display='none'
})


// ............................start aside

let  menuItem = document.querySelectorAll('.menu-item')
// .................active class remove ......

const removeActive=()=>{
    menuItem.forEach(item=>{
     item.classList.remove('active')
    })
 
 }
menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
            document.querySelector('.notification-box').style.display='none'
    })
})
document.querySelector('#Notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notifyCounter2').style.display='none';
    document.querySelector('.messages').classList.toggle('boxshadow1');
    setTimeout(()=>{

        document.querySelector('.messages').classList.remove('boxshadow1');
    
    },3000);
})

//....................................start.friend request..............
let Accept = document.querySelectorAll('#Accept');
let Delete = document.querySelectorAll('#Delete');


Accept.forEach(acc=>{
    acc.addEventListener('click',()=>{
        acc.parentElement.style.display='none'
        acc.parentElement.parentElement.querySelector('.alert').style.display='block'

    })
});
Delete.forEach(deletee =>{
    deletee.addEventListener('click',()=>{
        deletee.parentElement.parentElement.style.display='none'
    })

});


//..................start profile popup...........

    

document.querySelectorAll('#my-profile-picture').forEach(AllProfile=>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'
})

})

document.querySelectorAll('.close').forEach(AllCloser=>
    {
        AllCloser.addEventListener('click',()=>{
            document.querySelector('.profile-popup').style.display='none'
            document.querySelector('.add-post-popup').style.display='none'
             document.querySelector('.theme-customize').style.display='none'
        })
    }
)


document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src= URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})





//..................start add post popup...........

document.querySelector('#create-lg').addEventListener('click',()=>{

    document.querySelector('.add-post-popup').style.display='flex'

})

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postimg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})

//..................start add story ...........

document.querySelector('#add-story').addEventListener('change',()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0]);

    document.querySelector('.add-story').style.display='none'
})



//......Mini button input.............

document.querySelector('.mini-button').addEventListener('click',()=>{
    document.querySelector('.input-post').classList.toggle('boxshadow1')
    setTimeout(()=>{
        document.querySelector('.input-post').classList.remove('boxshadow1')
        
    
    },3000);
})
document.querySelector('.mini-button').addEventListener('dblclick',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
})
// ...............liked button......

document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
       liked.classList.toggle('liked');
    })
    
})
//...........set timeout..........




//.............. theme customize----------------

document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
});




//.........font size.....

let fontsize = document.querySelectorAll('.choose-size span');
const removeSelectorActive =()=>{
    fontsize.forEach(size=>{
        size.classList.remove('active')
    }
)}

fontsize.forEach(size=>{
    
    size.addEventListener('click',()=>{
        let fontsize;
        removeSelectorActive();
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')){
            fontsize='10px';
    
        }else if(size.classList.contains('font-size-2')){
            fontsize='13px';
        }else if(size.classList.contains('font-size-3')){
            fontsize='16px';
        }else if(size.classList.contains('font-size-4')){
            fontsize='19px';
        }else if(size.classList.contains('font-size-5')){
            fontsize='22px';
        }
        
    // html root font size change....
    document.querySelector('html').style.fontSize=fontsize;
    
    })
   
})


// primary color ...................

let colorpallete = document.querySelectorAll('.choose-color span')
var root = document.querySelector(':root')
//remove color...................
const removeActiveColor =()=>{
    colorpallete.forEach(color=>{
        color.classList.remove('active')
    }
)}
colorpallete.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryhue;
        removeActiveColor();
        color.classList.add('active');
        if(color.classList.contains('color-1')){
            hue=252;
        }else if(color.classList.contains('color-2')){
            hue=52;
        }else if(color.classList.contains('color-3')){
            hue=352;
        }else if(color.classList.contains('color-4')){
            hue=152;
        }else if(color.classList.contains('color-5')){
            hue=202;
        }
        root.style.setProperty('--primary-color-hue',hue);
    })
});


//...........background color

let bg1=document.querySelector('.bg1');
let bg2=document.querySelector('.bg2');
let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;


const changeBg=()=>{
    root.style.setProperty('--color-dark-light-theme',darkColorLightTheme)
    root.style.setProperty('--color-light-light-theme',lightColorLightTheme)
    root.style.setProperty('--color-white-light-theme', whiteColorLightTheme)
}


bg2.addEventListener('click',()=>{
    darkColorLightTheme='95%';
    lightColorLightTheme='5%';
    whiteColorLightTheme='10%';
    //add active class.....
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bgicon();
    changeBg();
    
});
bg1.addEventListener('click',()=>{
   
    //add active class.....
    bg1.classList.add('active');
    bg2.classList.remove('active');
    window.location.reload();
});


/// Dark theme  aside
let menuItemImg = document.querySelectorAll('.menu-item span img');


const bgicon =()=>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg');
    })
}