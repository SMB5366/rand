var RNumber;
var RTries;
limit = 50;

function random()
{
today = new Date();
num = today.getTime();
num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limit;
return num;
}

function init(){

	RNumber = random();

	RTries = 0;
	document.FGame.output.value = "Угадай число от 0 до " + (limit-1) + " ..."
	document.FGame.Tries.value = RTries;
	document.FGame.highlow.value = "";
	document.FGame.input.value = "";

}


function Game(Number) {
if(Number==RNumber)
{
RTries++;
document.FGame.output.value = "Вы догадались c : " + RTries + ' Попытки! Это было '
+ RNumber + "! Нажмите 'Старт', чтобы играть снова";
document.FGame.Highlow.value = "Правильно 😊";



}

else {
	RTries++;
	document.FGame.output.value = "НЕТ, " + Number + " - ЭТО НЕ ТО ЧИСЛО, КОТОРОЕ Я ЗАГАДАЛ! 😡"
	document.FGame.highlow.value = (RNumber > Number) ? 'БОЛЬШЕ!!!' : 'ПОМЕНЬШЕ!!!';
	document.FGame.Tries.value = RTries; 



	}
	
}