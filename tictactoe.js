function CriaTab(){
    tab=document.getElementById("tabuleiro");
    for(c=0;c<3;c++){
        for(i=0;i<3;i++){
            td=document.createElement("div");
            td.setAttribute("class","peca")
            td.setAttribute("id",""+c+i);
            on="if(TestaTab()==true){ColocaX("+c+","+i+");if(TestaTab()==true){PcJoga()}else{setTimeout(TestaTabFinal,1000);};}else{TestaTabFinal()}"
            td.setAttribute("onclick",on);
            tab.appendChild(td);
            tabuleiro[c][i]="#";
        }
    }
}
function ColocaX(linha,coluna){
    td=document.getElementById(""+linha+coluna);
    td.style.backgroundImage="url(Imagens/x.png)"
    td.style.backgroundSize="120px 120px"
    tabuleiro[linha][coluna]="X";
    td.removeAttribute("onclick");
}
function PcJoga(){
    if(tabuleiro[0][0]=="O" && tabuleiro[0][1]=="O" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[1][0]=="O" && tabuleiro[1][1]=="O" && tabuleiro[1][2]=="#"){
		tabuleiro[1][2]="O";
	}
	else if(tabuleiro[2][0]=="O" && tabuleiro[2][1]=="O" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[0][2]=="O" && tabuleiro[0][1]=="O" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[1][2]=="O" && tabuleiro[1][1]=="O" && tabuleiro[1][0]=="#"){
		tabuleiro[1][0]="O";
	}
	else if(tabuleiro[2][2]=="O" && tabuleiro[2][1]=="O" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[0][2]=="O" && tabuleiro[0][0]=="O" && tabuleiro[0][1]=="#"){
		tabuleiro[0][1]="O";
	}
	else if(tabuleiro[1][2]=="O" && tabuleiro[1][0]=="O" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[2][2]=="O" && tabuleiro[2][0]=="O" && tabuleiro[2][1]=="#"){
		tabuleiro[2][1]="O";
	}
	else if(tabuleiro[0][0]=="O" && tabuleiro[1][0]=="O" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[0][1]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][1]=="#"){
		tabuleiro[2][1]="O";
	}
	else if(tabuleiro[0][2]=="O" && tabuleiro[1][2]=="O" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[2][0]=="O" && tabuleiro[1][0]=="O" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[2][1]=="O" && tabuleiro[1][1]=="O" && tabuleiro[0][1]=="#"){
		tabuleiro[0][1]="O";
	}
	else if(tabuleiro[2][2]=="O" && tabuleiro[1][2]=="O" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[0][0]=="O" && tabuleiro[2][0]=="O" && tabuleiro[1][0]=="#"){
		tabuleiro[1][0]="O";
	}
	else if(tabuleiro[0][1]=="O" && tabuleiro[2][1]=="O" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0][2]=="O" && tabuleiro[2][2]=="O" && tabuleiro[1][2]=="#"){
		tabuleiro[1][2]="O";
	}
	else if(tabuleiro[0][0]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[2][2]=="O" && tabuleiro[1][1]=="O" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[2][2]=="O" && tabuleiro[0][0]=="O" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0][2]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[2][0]=="O" && tabuleiro[1][1]=="O" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[2][0]=="O" && tabuleiro[0][2]=="O" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0][0]=="X" && tabuleiro[0][1]=="X" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[1][0]=="X" && tabuleiro[1][1]=="X" && tabuleiro[1][2]=="#"){
		tabuleiro[1][2]="O";
	}
	else if(tabuleiro[2][0]=="X" && tabuleiro[2][1]=="X" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[0][2]=="X" && tabuleiro[0][1]=="X" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[1][2]=="X" && tabuleiro[1][1]=="X" && tabuleiro[1][0]=="#"){
		tabuleiro[1][0]="O";
	}
	else if(tabuleiro[2][2]=="X" && tabuleiro[2][1]=="X" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[0][2]=="X" && tabuleiro[0][0]=="X" && tabuleiro[0][1]=="#"){
		tabuleiro[0][1]="O";
	}
	else if(tabuleiro[1][2]=="X" && tabuleiro[1][0]=="X" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[2][2]=="X" && tabuleiro[2][0]=="X" && tabuleiro[2][1]=="#"){
		tabuleiro[2][1]="O";
	}
	else if(tabuleiro[0][0]=="X" && tabuleiro[1][0]=="X" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[0][1]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][1]=="#"){
		tabuleiro[2][1]="O";
	}
	else if(tabuleiro[0][2]=="X" && tabuleiro[1][2]=="X" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[2][0]=="X" && tabuleiro[1][0]=="X" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[2][1]=="X" && tabuleiro[1][1]=="X" && tabuleiro[0][1]=="#"){
		tabuleiro[0][1]="O";
	}
	else if(tabuleiro[2][2]=="X" && tabuleiro[1][2]=="X" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[0][0]=="X" && tabuleiro[2][0]=="X" && tabuleiro[1][0]=="#"){
		tabuleiro[1][0]="O";
	}
	else if(tabuleiro[0][1]=="X" && tabuleiro[2][1]=="X" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0][2]=="X" && tabuleiro[2][2]=="X" && tabuleiro[1][2]=="#"){
		tabuleiro[1][2]="O";
	}
	else if(tabuleiro[0][0]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][2]=="#"){
		tabuleiro[2][2]="O";
	}
	else if(tabuleiro[2][2]=="X" && tabuleiro[1][1]=="X" && tabuleiro[0][0]=="#"){
		tabuleiro[0][0]="O";
	}
	else if(tabuleiro[2][2]=="X" && tabuleiro[0][0]=="X" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0][2]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][0]=="#"){
		tabuleiro[2][0]="O";
	}
	else if(tabuleiro[2][0]=="X" && tabuleiro[1][1]=="X" && tabuleiro[0][2]=="#"){
		tabuleiro[0][2]="O";
	}
	else if(tabuleiro[2][0]=="X" && tabuleiro[0][2]=="X" && tabuleiro[1][1]=="#"){
		tabuleiro[1][1]="O";
	}
	else if(tabuleiro[0].indexOf("O")!=-1 || tabuleiro[1].indexOf("O")!=-1 || tabuleiro[2].indexOf("O")!=-1){
		SorteiaPosicao1();
	}
	else {
		SorteiaPosicao2();
	}
    AtualizaTela();
    if(TestaTab()!=true){
        setTimeout(TestaTabFinal,1000);
    }
}
function TestaTab(){
	tof=false
	for(c=0;c<3;c++){
		for(i=0;i<3;i++){
			if(tabuleiro[c][i]=="#"){
				tof=true;
			}
		}
	}
	for(c=0;c<3;c++){
		if(tabuleiro[c][0]=="X" && tabuleiro[c][1]=="X" && tabuleiro[c][2]=="X" || tabuleiro[c][0]=="O" && tabuleiro[c][1]=="O" && tabuleiro[c][2]=="O" || tabuleiro[0][c]=="X" && tabuleiro[1][c]=="X" && tabuleiro[2][c]=="X" || tabuleiro[0][c]=="O" && tabuleiro[1][c]=="O" && tabuleiro[2][c]=="O"){
			tof=false;
		}
	}
	if(tabuleiro[0][0]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][2]=="X" || tabuleiro[0][0]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][2]=="O" || tabuleiro[0][2]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][0]=="X" || tabuleiro[0][2]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][0]=="O"){
		tof=false;
	}
	return tof;
}
function SorteiaPosicao1(){
	do{
		n1=Math.floor(Math.random()*3);
		n2=Math.floor(Math.random()*3);
		tof=tabuleiro[n1][n2]=="#" && (tabuleiro[n1].indexOf("O")!=-1 || tabuleiro[0][n2]=="O" || tabuleiro[1][n2]=="O" || tabuleiro[2][n2]=="O");
		if(tof==true){
			tabuleiro[n1][n2]="O";
		}
	}while(tof==false)
}
function SorteiaPosicao2(){
	do{
		n1=Math.floor(Math.random()*3);
		n2=Math.floor(Math.random()*3);
		tof=tabuleiro[n1][n2]=="#";
		if(tof==true){
			tabuleiro[n1][n2]="O";
		}
	}while(tof==false)
}
function AtualizaTela(){
    for(c=0;c<3;c++){
        for(i=0;i<3;i++){
            if(tabuleiro[c][i]=="O"){
                td=document.getElementById(""+c+i);
                td.style.backgroundImage="url(Imagens/circle.png)";
                td.style.backgroundSize="120px 120px";
            }
        }
    }
}
function TestaTabFinal(){
	resp="Deu velha!";
	for(c=0;c<3;c++){
		if(tabuleiro[c][0]=="X" && tabuleiro[c][1]=="X" && tabuleiro[c][2]=="X" || tabuleiro[0][c]=="X" && tabuleiro[1][c]=="X" && tabuleiro[2][c]=="X"){
			resp="Você ganhou!";
		}
		if(tabuleiro[c][0]=="O" && tabuleiro[c][1]=="O" && tabuleiro[c][2]=="O" || tabuleiro[0][c]=="O" && tabuleiro[1][c]=="O" && tabuleiro[2][c]=="O"){
			resp="Você perdeu!"
		}
	}
	if(tabuleiro[0][0]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][2]=="X" || tabuleiro[0][2]=="X" && tabuleiro[1][1]=="X" && tabuleiro[2][0]=="X"){
		resp="Você ganhou!";
	}
	if(tabuleiro[0][0]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][2]=="O" || tabuleiro[0][2]=="O" && tabuleiro[1][1]=="O" && tabuleiro[2][0]=="O"){
		resp="Você perdeu!"
	}
    tela=[
        '<div class="container">',
        '    <div class="box">',
        '        <h1>'+resp+'</h1>',
        '        <a href="index.html"><button class="botao2">Tentar Novamente</button></a>',
        '    <div>',
        '</div>'
    ]
    setTimeout(()=>{document.querySelector("body").innerHTML=tela.join("\n")},500);
}
var tabuleiro=[[],[],[]]
CriaTab()