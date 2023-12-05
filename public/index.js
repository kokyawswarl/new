const menuOnOff =document.getElementsByClassName("menuOnOff")[0];
const menu =document.getElementsByClassName("menu")[0];
const show =document.getElementsByClassName("show")[0];
const userNameT=document.querySelector(".userName");
const expT=document.querySelector(".exp");
const modelT=document.querySelector(".model");
const zUpT=document.querySelector(".zUp");
const zDowmT=document.querySelector(".zDown")
const zoomT =document.querySelector("#zoom");
const loadT =document.querySelector(".load");
const jsonGet=  JSON.parse(userNameT.innerHTML);
const productOnlinr={"name":"kokyaw",
        "exper":"2.9.2026",
        "allModel":[
            ["mi",
                ["6a"
                ,["backlight6a",["https://kyawswarwin.bsite.net/phoneWay/mi/6a/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/6a/backlight/b.png"]]
                ,["spaeker6a",["https://kyawswarwin.bsite.net/phoneWay/mi/6a/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/6a/mic_spk/b.png"]]
                ,["networt",["https://kyawswarwin.bsite.net/phoneWay/mi/6a/network/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/6a/network/b.png"]]
                ],

                ["note7"
                ,["backlight7no",["https://kyawswarwin.bsite.net/phoneWay/mi/note7/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/note7/backlight/b.png"]]
                ,["spaeker",["https://kyawswarwin.bsite.net/phoneWay/mi/note7/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/note7/mic_spk/b.png"]]
                ,["networt",["https://kyawswarwin.bsite.net/phoneWay/mi/note7/network/a.png","https://kyawswarwin.bsite.net/phoneWay/mi/note7/network/b.png"]]
                ]
            ],

            ["oppo",
                ["f1"
                ,["backlight f1",["https://kyawswarwin.bsite.net/phoneWay/oppo/f1/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f1/backlight/b.png"]]
                ,["spaeker",["https://kyawswarwin.bsite.net/phoneWay/oppo/f1/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f1/mic_spk/b.png"]]
                ,["networt",["https://kyawswarwin.bsite.net/phoneWay/oppo/f1/network/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f1/network/b.png"]]
                ],

                ["f5"
                ,["backlight f5",["https://kyawswarwin.bsite.net/phoneWay/oppo/f5/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f5/backlight/b.png"]]
                ,["spaeker",["https://kyawswarwin.bsite.net/phoneWay/oppo/f5/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f5/mic_spk/b.png"]],
                ["networt",["https://kyawswarwin.bsite.net/phoneWay/oppo/f5/network/a.png","https://kyawswarwin.bsite.net/phoneWay/oppo/f5/network/b.png"]]
                ]
            ],
            ["vivo",
                ["y71"
                ,["backlighty17",["https://kyawswarwin.bsite.net/phoneWay/vivo/y17/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y17/backlight/b.png"]]
                ,["spaeker",["https://kyawswarwin.bsite.net/phoneWay/vivo/y17/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y17/mic_spk/b.png"]]
                ,["networt",["https://kyawswarwin.bsite.net/phoneWay/vivo/y17/network/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y17/network/b.png"]]
                ],

                ["y15"
                ,["backlighty15",["https://kyawswarwin.bsite.net/phoneWay/vivo/y15/backlight/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y15/backlight/b.png"]]
                ,["spaeker",["https://kyawswarwin.bsite.net/phoneWay/vivo/y15/mic_spk/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y15/mic_spk/b.png"]],
                ["networt",["https://kyawswarwin.bsite.net/phoneWay/vivo/y15/network/a.png","https://kyawswarwin.bsite.net/phoneWay/vivo/y15/network/b.png"]]
                ]
            ]
        ]
}
const productOffline={"name":"kokyaw",
        "exper":"2.9.2026",
        "allModel":[
            ["mi",
                ["6a"
                ,["backlight6a",["phoneWay/mi/6a/backlight/a.png"]]
                ,["spaeker6a",["phoneWay/mi/6a/mic_spk/a.png","phoneWay/mi/6a/mic_spk/b.png"]]
                ,["networt",["phoneWay/mi/6a/network/a.png","phoneWay/mi/6a/network/b.png"]]
                ],

                ["note7"
                ,["backlight7no",["phoneWay/mi/note7/backlight/a.png","phoneWay/mi/note7/backlight/b.png"]]
                ,["spaeker",["phoneWay/mi/note7/mic_spk/a.png","phoneWay/mi/note7/mic_spk/b.png"]]
                ,["networt",["phoneWay/mi/note7/network/a.png","phoneWay/mi/note7/network/b.png"]]
                ]
            ],

            ["oppo",
                ["f1"
                ,["backlight f1",["phoneWay/oppo/f1/backlight/a.png","phoneWay/oppo/f1/backlight/b.png"]]
                ,["spaeker",["phoneWay/oppo/f1/mic_spk/a.png","phoneWay/oppo/f1/mic_spk/b.png"]]
                ,["networt",["phoneWay/oppo/f1/network/a.png","phoneWay/oppo/f1/network/b.png"]]
                ],

                ["f5"
                ,["backlight f5",["phoneWay/oppo/f5/backlight/a.png","phoneWay/oppo/f5/backlight/b.png"]]
                ,["spaeker",["phoneWay/oppo/f5/mic_spk/a.png","phoneWay/oppo/f5/mic_spk/b.png"]],
                ["networt",["phoneWay/oppo/f5/network/a.png","phoneWay/oppo/f5/network/b.png"]]
                ]
            ],
            ["vivo",
                ["y71"
                ,["backlighty17",["phoneWay/vivo/y71/backlight/a.png","phoneWay/vivo/y71/backlight/b.png"]]
                ,["spaeker",["phoneWay/vivo/y71/mic_spk/a.png","phoneWay/vivo/y71/mic_spk/b.png"]]
                ,["networt",["phoneWay/vivo/y71/network/a.png","phoneWay/vivo/y71/network/b.png"]]
                ],

                ["y15"
                ,["backlighty15",["phoneWay/vivo/y15/backlight/a.png","phoneWay/vivo/y15/backlight/b.png"]]
                ,["spaeker",["phoneWay/vivo/y15/mic_spk/a.png","phoneWay/vivo/y15/mic_spk/b.png"]],
                ["networt",["phoneWay/vivo/y15/network/a.png","phoneWay/vivo/y15/network/b.png"]]
                ]
            ]
        ]
}
//const url="/productjson.json";
let product = productOnlinr;
// fetch(productOffline)
// .then((response)=>{
//         const responseData=response.json();
//         return responseData;
//     }).then((productsDataFromServer)=>{
//         product=productsDataFromServer;
//         loadT.innerHTML="ok..";
//         BuilbUi();
//     }).catch((err)=>{
//         console.log("this catch errer"+err);
//     });
    
const BuilbUi=()=>{
    let onOff = true;
    menuOnOff.addEventListener("click",()=>{
        if(product!=undefined){
            if(onOff){
                menu.style.width="0px";
                show.style.width="100%";
                onOff = false;
            }else{
                console.log("open");
                menu.style.width="30%";
                show.style.width="70%";
                onOff = true;
            };
        }else{
            loadT.innerHTML="loading....";
        }
    });
    const imgChaing=(data)=>{
        const img = data;
        zoomT.innerHTML="";
        const imgBody1=document.createElement("div");
        const imgBody2=document.createElement("div");
        const imgBody3=document.createElement("div");
        imgBody1.classList.add("imgBody");
        imgBody2.classList.add("imgBody");
        imgBody3.classList.add("imgBody");

        for (let i = 0; i < img.length; i++) {
            const img1 =document.createElement("img");
            img1.classList.add("img");
            img1.alt="zoom";
            img1.src=img[i];
            const imgName=img[i].split("/");
            console.log(imgName[imgName.length-1]);
            if(imgName[imgName.length-1]=="A.png"||imgName[imgName.length-1]=="a.png"||imgName[imgName.length-1]=="B.png"||imgName[imgName.length-1]=="b.png"){
                imgBody1.append(img1);
            }else if(imgName[imgName.length-1]=="C.png"||imgName[imgName.length-1]=="c.png"||imgName[imgName.length-1]=="D.png"||imgName[imgName.length-1]=="d.png"){
                imgBody2.append(img1);
            }else{
                imgBody3.append(img1);
            }
        }
        zoomT.append(imgBody1,imgBody2,imgBody3)
    }
    let widthCount=300;
    let heightCount=200;
    zUpT.addEventListener("click",()=>{
        widthCount=widthCount*2;
        heightCount=heightCount*2;
        const img0 =document.getElementsByClassName("img")[0];
        const img1 =document.getElementsByClassName("img")[1];
        const img2 =document.getElementsByClassName("img")[2];
        const img3 =document.getElementsByClassName("img")[3];
        const img4 =document.getElementsByClassName("img")[4];
        const img5 =document.getElementsByClassName("img")[5];
        img0.style.width = widthCount+"px";
        img0.style.height = heightCount+"px";
        img1.style.width = widthCount+"px";
        img1.style.height = heightCount+"px";

        img2.style.width = widthCount+"px";
        img2.style.height = heightCount+"px";
        img3.style.width = widthCount+"px";
        img3.style.height = heightCount+"px";

        img4.style.width = widthCount+"px";
        img4.style.height = heightCount+"px";
        img5.style.width = widthCount+"px";
        img5.style.height = heightCount+"px";
    });
    zDowmT.addEventListener("click",()=>{
        widthCount=widthCount/2;
        heightCount=heightCount/2;
        const img0 =document.getElementsByClassName("img")[0];
        const img1 =document.getElementsByClassName("img")[1];
        const img2 =document.getElementsByClassName("img")[2];
        const img3 =document.getElementsByClassName("img")[3];
        const img4 =document.getElementsByClassName("img")[4];
        const img5 =document.getElementsByClassName("img")[5];
        img0.style.width = widthCount+"px";
        img0.style.height = heightCount+"px";
        img1.style.width = widthCount+"px";
        img1.style.height = heightCount+"px";

        img2.style.width = widthCount+"px";
        img2.style.height = heightCount+"px";
        img3.style.width = widthCount+"px";
        img3.style.height = heightCount+"px";

        img4.style.width = widthCount+"px";
        img4.style.height = heightCount+"px";
        img5.style.width = widthCount+"px";
        img5.style.height = heightCount+"px";
    });
    imgChaing(["A.png","B.png"]);
    console.log(jsonGet[0]);
    userNameT.innerHTML=jsonGet[0].name;
    expT.innerHTML=product.exper;
    let open =[];
    const openTorF=(ev)=>{
        for (let t = 0; t < open.length; t++) {
            if (ev==open[t]){
                open.splice(open.indexOf(ev),1);
                return false;
            }
        }
        
        open.push(ev);
        return true;
    }
    const errorClack=(li0,li1,li2,li3,li4)=>{
        widthCount=300;
        heightCount=200;
        console.log(product.allModel[li0][li1][li2][1]);
        imgChaing(product.allModel[li0][li1][li2][1]);
        loadT.innerHTML=product.allModel[li0][0]+" "+product.allModel[li0][li1][0]+" "+product.allModel[li0][li1][li2][0];
    }
    const errorList=()=>{
        let allerroediv="";
            for (let x = 0; x < product.allModel.length; x++) {
                for (let i = 0; i < product.allModel[x].length; i++) {
                    if(event.target.id==product.allModel[x][0]+product.allModel[x][i][0]){
                        for (let e = 1; e < product.allModel[x][i].length; e++) {
                            const errorDiv=document.createElement("div");
                            errorDiv.classList.add("errorDiv");
                            errorDiv.addEventListener("click",()=>{errorClack(x,i,e,0)});
                            errorDiv.append(product.allModel[x][i][e][0]);
                            allerroediv = document.getElementById(product.allModel[x][0]+product.allModel[x][i][0]+"li");
                            allerroediv.append(errorDiv);
                        }
        
                    }
                    
                }
                
            }
        
        
            if (openTorF(event.target.id+"li")){
                console.log(event.target.id)
            }else{
                 allerroediv.innerHTML="";
            }
    }
    const modelShow = (event)=>{
        const modelOneT =product.allModel[event.target.id];
        const allModeldiv = document.getElementById(product.allModel[event.target.id][0]+event.target.id);
        
        if (openTorF(product.allModel[event.target.id][0]+event.target.id)) {
            for (let i = 1; i < modelOneT.length; i++) {
                const modelName =modelOneT[i][0];
                const modelOne = document.createElement("div");
                modelOne.classList.add("modelOne");
                modelOne.id=product.allModel[event.target.id][0]+product.allModel[event.target.id][i][0];
                modelOne.addEventListener("click",errorList);
                modelOne.append(modelName);
                allModeldiv.append(modelOne);
                const modelDiv = document.createElement("div");
                modelDiv.classList.add("modelDiv");
                //console.log(product.allModel[event.target.id][0]+product.allModel[event.target.id][i][0]+"li")
                modelDiv.id=product.allModel[event.target.id][0]+product.allModel[event.target.id][i][0]+"li";
                allModeldiv.append(modelDiv);
            }
            
        }else
        {
            allModeldiv.innerHTML="";
        }
        

    }
    for (let i = 0; i < product.allModel.length; i++) {
        const modelAll =product.allModel[i][0];
        const brand = document.createElement("div");
        brand.id=i;
        brand.classList.add("brand");
        brand.addEventListener("click",modelShow);
        brand.append(modelAll);
        modelT.append(brand);
        const modelDiv = document.createElement("div");
        modelDiv.classList.add("modelDiv");
        modelDiv.id=modelAll+i;
        modelT.append(modelDiv);
    }
}
BuilbUi();
