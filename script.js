
let randomNumber = Math.floor(Math.random()*20)+1


let score = 20
let highscore = 0

document.querySelector('.check').addEventListener(
    'click', function()
    {
        let guess = Number(document.querySelector('.guess').value)

        if(!guess || guess > 20 || guess<0) //0-false  true - 1 if( ! 0)
        {
            document.querySelector('.message').innerHTML="💥No Number,Please Enter Valid Number (1-20)"
        }
        else if(guess === randomNumber)
        {
            document.querySelector('.message').innerHTML="Correct!"
            document.querySelector('body').style.backgroundColor='#60b347'
            document.querySelector('.number').style.width='30rem'
            document.querySelector('.number').innerHTML=randomNumber
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
              }
            
        }

        else if(guess > randomNumber)
        {
            if(score > 1)
            {
                document.querySelector('.message').innerHTML="Too High"
                score--
                document.querySelector('.score').innerHTML=score
            }
            else
            {
                document.querySelector('.message').innerHTML="Game Is Over"
                document.querySelector('.score').innerHTML=0
            }
           
        }
        else if (guess < randomNumber)
        {
            if(score >1)
            {
                document.querySelector('.message').innerHTML="Too Low"
                score--
                document.querySelector('.score').innerHTML=score
            }
            else
            {
                document.querySelector('.message').innerHTML="Game Is Over"
                document.querySelector('.score').innerHTML=0
            }
           
        }

    }
 
)

document.querySelector('.again').addEventListener(
    'click', function(){

        score = 20
        randomNumber = Math.floor(Math.random()*20)+1
        document.querySelector('.guess').value=''
        document.querySelector('.number').inenrHTML='?'
        document.querySelector('.message').innerHTML='Start guessing...'
        document.querySelector('.score').innerHTML=score
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    }
)