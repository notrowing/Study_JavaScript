
class Calculator{
    constructor(displayElement){
        this.displayElement = displayElement;
        this.operCheck=true; // 연산자 선택 여부 저장
        this.equalsCheck = false;
        this.clear();
    }

    inputNumber(num){

        if(this.equalsCheck){
            this.displayContent = num;
            this.equalsCheck=false;
        }
        else
        {
            this.displayContent += num;
        }
        this.operCheck=false;

    }
    inputOperator(operator){
        if(this.operCheck) return false;// operCheck 값이 true 면 함수 탈출

        if(this.equalsCheck) this.equalsCheck=false;

        this.displayContent += operator;
        return this.operCheck=true; // 연산자 입력시 true
    }
    showDisplay(){
        this.displayElement.textContent = this.displayContent;
    }
    clear(){
        this.operCheck=true;
        this.displayContent='';
        this.displayElement.textContent=0;
        //this.displayElement.value=0; input태그에 불러올때는 value에 가져오면 됨 
    }
    Back(){
        var text = this.displayContent;
        var size = text.length -1;
        this.displayContent = text.substring(0,size);
    }
    equation(){
        this.displayContent = eval(this.displayContent
                                            .replace('\u00D7', '*')
                                            .replace('\u00F7', '/'));
        this.equalsCheck = true;
    }
}

const btns = document.querySelectorAll(".wrapper>div");
const displayElement = document.querySelector('h2');
const calculator = new Calculator(displayElement);


btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
     
        switch (btn.dataset.type) {
        case 'operator':
            console.log('operator')
            calculator.inputOperator(btn.innerText);
            calculator.showDisplay()
            break;

        case 'equal':
            console.log('equal');
            calculator.equation();
            calculator.showDisplay();
            break;

        case 'ac':
            console.log('ac');
            calculator.clear();
            break;

        case 'back':
            console.log('back');
            calculator.Back();
            calculator.showDisplay()
            break;
      
        default:
            console.log('number');
            calculator.inputNumber(btn.innerText);
            calculator.showDisplay();
            break;
        }
    }); 
})
    