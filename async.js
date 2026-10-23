function fetchEvent(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Tech Task")
        }, 2000)
    })
}
function fetchVenue(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Seminar Hall")
        }, 1000)
    })
}
async function loadPageData(){
    const[event,venue] = await Promise.all([fetchEvent(), fetchVenue()]);
    console.log(event);
    console.log(venue);
}
loadPageData();