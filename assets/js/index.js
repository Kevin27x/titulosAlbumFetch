//---------------Requisitos----------------------
//API: https://jsonplaceholder.typicode.com/photos
//F. Asíncrona de settimeout 3 segundos, mensaje en consola "Información enviada" 
//Función Asíncrona con URL en variable recibida por Fetch
//Usar Try/Catch.
//Usar async/await para el mensaje final de retorno y el Fetch
//Iterar arreglo del Fetch. Mostrar solo 20 primeros titulos
//---------------Desarrollo----------------------

try{
    //Función asincrona que ejecuta la promesa Fetch. Es "esperada" con await y luego parseada. Al finalizar ejecuta la función waitMessage()
    const getTitles = async() => {
        const url = "https://jsonplaceholder.typicode.com/photos";
    
        const titles = await fetch(url);
        const jsonTitles = await titles.json();
        
        jsonTitles.forEach(element => {
            if(element.id <=20){
                console.log(element.title);
            };
        });
        //Ejecución de waitMessage() al finalizar la iteración del array traído por Fetch. Si hay algún error en Fetch, no se ejecutará esta función
        waitMessage();
    };
    //Función que retorna una promesa. La promesa retorna un string: "Información enviada" (en caso de ser exitosa)
    const message = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve("Información enviada.");
            }, 3000);
        });
    };
    //Función asíncrona que recibe y llama a la función principal message(). Imprime el resolve de message()
    const waitMessage = async() => {
        const waitMessage = await message();
        console.log(waitMessage);
    };
    //Ejecución de la función asíncrona que contiene el Fetch, y dispara a waitMessage
    getTitles();

} catch(error){
    console.error(error);
};

