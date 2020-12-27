var vala, valb;
function funcaoprim(){
    var nx1 = document.getElementById('txtx1');
    var nx2 = document.getElementById('txtx2');
    var ny1 = document.getElementById('txty1');
    var ny2 = document.getElementById('txty2');
    //verificar campos:

    if (nx1.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
    if (nx2.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
    if (ny1.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
    if (ny2.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
    //convert string to number

    var ix1 = Number(nx1.value);
    var ix2 = Number(nx2.value);
    var iy1 = Number(ny1.value);
    var iy2 = Number(ny2.value);
    //adiconar o valor dos pontos
    document.getElementById('txa').innerHTML = ix1 + ", " + iy1;
    document.getElementById('txb').innerHTML = ix2 + ", " + iy2;
    //calcular o valor de a e b:

    vala = ((iy2-iy1)/(ix2-ix1));
    //passar para o label
    document.getElementById('lba').innerHTML = vala;

    valb = ((iy1*ix2)-(iy2*ix1))/(ix2-ix1);
    //passar para o label
    document.getElementById('lbb').innerHTML = valb;
    //escrever a função
    if (valb < 0 ){
        document.getElementById('fxtxt').innerHTML = vala + "x" + valb;
    }
    else {
        document.getElementById('fxtxt').innerHTML = vala + "x+" + valb;  
    };
}
function calvaly(){
    var nx3 = document.getElementById('verxtxt');
    if (nx3.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
     var pty = Number(nx3.value);
    //var vala = ((iy2-iy1)/(ix2-ix1));
    //var valb = ((iy1*ix2)-(iy2*ix1))/(ix2-ix1);
    //f(x) = ax + b
    //
    var ponty = (vala*pty)+valb;
    document.getElementById('valy').innerHTML = ponty;  
    
}
function calvalx(){
     var ny3 = document.getElementById('verytxt');
    if (ny3.value.length == 0){
        window.alert('Você deve preencher todos os campos')
    };
    var ptx = Number(ny3.value);
    //var vala = ((iy2-iy1)/(ix2-ix1));
    //var valb = ((iy1*ix2)-(iy2*ix1))/(ix2-ix1);
    //f(x) = ax + b
    //y = ax + b; y-b = ax; y-b/a = x
    var pontx = (ptx-valb)/vala;
    document.getElementById('valx').innerHTML = pontx;  

}
