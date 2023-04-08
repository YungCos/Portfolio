const mobileCutoff = 900

function resizeMain(){
    const main = document.getElementsByName("main")[0]
    const heroImage = document.getElementsByClassName("hero-image")[0]
    const description = document.getElementsByClassName("description")[0]

    if (window.innerWidth > mobileCutoff){
        heroImage.style.width = "50%"
        description.style.width = "50%"
        description.style.justifyContent = "center";
        description.style.height = "100vh"
        main.style.flexDirection = "row"
        description.style.marginBottom = "0"
        
    }
    else{
        heroImage.style.width = "100%"
        description.style.width = "100%"
        main.style.flexDirection = "column"
        description.style.justifyContent = "normal";
        description.style.height = "100%"
        description.style.marginBottom = "64px"
    }
}

onresize = (event) => {
    resizeMain()
};

resizeMain()