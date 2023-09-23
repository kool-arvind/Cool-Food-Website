
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
       
        if(entry.isIntersecting ){
            entry.target.classList.add('show');
           
        }
        // we can see the animation every single time when we got the page if we remove comment of else
        // else{
        //     entry.target.classList.remove('show')
          
        // }
    })
    })
    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((el)=>{
        observer.observe(el)
    })
    
    const track = document.querySelector(".track");
    observer.observe(track)
    const track_two = document.querySelector(".track-two");
    observer.observe(track_two)

    const track_three = document.querySelector(".track-three");
    observer.observe(track_three)
    const track_four = document.querySelector(".track-four");
    observer.observe(track_four)
    
    const track_five = document.querySelector(".track-five");
    observer.observe(track_five)
    const track_six = document.querySelector(".track-six");
    observer.observe(track_six)
    
    const track_seven = document.querySelector(".track-seven");
    observer.observe(track_seven)
    const track_eight = document.querySelector(".track-eight");
    observer.observe(track_eight)

    const track_nine = document.querySelector(".track-nine");
    observer.observe(track_nine)
    const track_ten = document.querySelector(".track-ten");
    observer.observe(track_ten)



    
    const tracks = document.querySelector(".tracks")
    observer.observe(tracks)
    
    const tracks_two = document.querySelector(".tracks-two")
    observer.observe(tracks_two)
   
    const tracks_three = document.querySelector(".tracks-three")
    observer.observe(tracks_three)
   
    const tracks_four = document.querySelector(".tracks-four")
    observer.observe(tracks_four)
   
    const tracks_five = document.querySelector(".tracks-five")
    observer.observe(tracks_five)
   

    