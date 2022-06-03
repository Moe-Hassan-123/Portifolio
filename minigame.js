function main()
{
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("btn_restart").addEventListener('click',function() {
            document.location.reload()                
        })
        var right_ans = answers[Math.floor(Math.random() * answers.length)];
        try_number = 5;
        form = document.getElementById("game-form")
            form.addEventListener('submit', function() {
                event.preventDefault();
                try_number--;
                input = form.elements["input"].value.toUpperCase()
                // function to append output in the webpage
                append_output(input,try_number)
                for(let letter_pos = 0; letter_pos < 5; letter_pos++)
                {
                    if (input[letter_pos] == right_ans[letter_pos])
                    {
                        // change the current letter's background color to green
                        to_color(try_number,letter_pos,"green")
                    }
                    else if (right_ans.includes(input[letter_pos]))
                    {
                        // change the current letters background color to yellow
                        to_color(try_number,letter_pos,"yellow")
                    }
                    else
                    {
                        //change current letters background color to grey
                        to_color(try_number,letter_pos,"grey")
                    }
                }
                if (input == right_ans)
                {
                    alert("YOU Won!!!");
                    head = document.getElementById("head")
                    head.innerHTML = "You Won!"
                    head.style.backgroundColor = "green"
                    //disable the submit button
                    document.getElementById("btn_submit").disabled=true
                    return
                }
                if (try_number == 0)
                {
                    head = document.getElementById("head")
                    head.innerHTML = "You Lost, Correct word was " + right_ans;
                    head.style.backgroundColor = "red"
                    //disable the submit button
                    document.getElementById("btn_submit").disabled=true
                    return
                }
                document.getElementById("head").innerHTML = "You have "+ try_number +" Tries left"
                form.reset()
            });
        });
}  
function append_output(output,try_number)
{
    spans ="";
    for(let letter = 0;letter < 5; letter++)
    {
        spans += "<span id="+letter+try_number+">"+output[letter]+"</span>";
    }
    var text = "<h3 id="+ try_number + ">" + spans + "</h3>"

    document.getElementById("game-output").innerHTML += text
}
function to_color(try_number,letter_pos,color)
{
    word = document.getElementById(""+letter_pos+try_number+"")
    word.style.backgroundColor=color
}

const answers = ['ABOUT','ABOVE','ABUSE','ACTOR','ACUTE','ADMIT','ADOPT','ADULT','AFTER','AGAIN','AGENT','AGREE','AHEAD','ALARM','ALBUM','ALERT','ALIKE','ALIVE','ALLOW','ALONE','ALONG','ALTER','AMONG','ANGER','ANGLE','ANGRY','APART','APPLE','APPLY','ARENA','ARGUE','ARISE','ARRAY','ASIDE','ASSET','AUDIO','AUDIT','AVOID','AWARD','AWARE','BADLY','BAKER','BASES','BASIC','BASIS','BEACH','BEGAN','BEGIN','BEGUN','BEING','BELOW','BENCH','BILLY','BIRTH','BLACK','BLAME','BLIND','BLOCK','BLOOD','BOARD','BOOST','BOOTH','BOUND','BRAIN','BRAND','BREAD','BREAK','BREED','BRIEF','BRING','BROAD','BROKE','BROWN','BUILD','BUILT','BUYER','CABLE','CALIF','CARRY','CATCH','CAUSE','CHAIN','CHAIR','CHART','CHASE','CHEAP','CHECK','CHEST','CHIEF','CHILD','CHINA','CHOSE','CIVIL','CLAIM','CLASS','CLEAN','CLEAR','CLICK','CLOCK','CLOSE','COACH','COAST','COULD','COUNT','COURT','COVER','CRAFT','CRASH','CREAM','CRIME','CROSS','CROWD','CROWN','CURVE','CYCLE','DAILY','DANCE','DATED','DEALT','DEATH','DEBUT','DELAY','DEPTH','DOING','DOUBT','DOZEN','DRAFT','DRAMA','DRAWN','DREAM','DRESS','DRILL','DRINK','DRIVE','DROVE','DYING','EAGER','EARLY','EARTH','EIGHT','ELITE','EMPTY','ENEMY','ENJOY','ENTER','ENTRY','EQUAL','ERROR','EVENT','EVERY','EXACT','EXIST','EXTRA','FAITH','FALSE','FAULT','FIBER','FIELD','FIFTH','FIFTY','FIGHT','FINAL','FIRST','FIXED','FLASH','FLEET','FLOOR','FLUID','FOCUS','FORCE','FORTH','FORTY','FORUM','FOUND','FRAME','FRANK','FRAUD','FRESH','FRONT','FRUIT','FULLY','FUNNY','GIANT','GIVEN','GLASS','GLOBE','GOING','GRACE','GRADE','GRAND','GRANT','GRASS','GREAT','GREEN','GROSS','GROUP','GROWN','GUARD','GUESS','GUEST','GUIDE','HAPPY','HARRY','HEART','HEAVY','HENCE','HENRY','HORSE','HOTEL','HOUSE','HUMAN','IDEAL','IMAGE','INDEX','INNER','INPUT','ISSUE','JAPAN','JIMMY','JOINT','JONES','JUDGE','KNOWN','LABEL','LARGE','LASER','LATER','LAUGH','LAYER','LEARN','LEASE','LEAST','LEAVE','LEGAL','LEVEL','LEWIS','LIGHT','LIMIT','LINKS','LIVES','LOCAL','LOGIC','LOOSE','LOWER','LUCKY','LUNCH','LYING','MAGIC','MAJOR','MAKER','MARCH','MARIA','MATCH','MAYBE','MAYOR','MEANT','MEDIA','METAL','MIGHT','MINOR','MINUS','MIXED','MODEL','MONEY','MONTH','MORAL','MOTOR','MOUNT','MOUSE','MOUTH','MOVIE','MUSIC','NEEDS','NEVER','NEWLY','NIGHT','NOISE','NORTH','NOTED','NOVEL','NURSE','OCCUR','OCEAN','OFFER','OFTEN','ORDER','OTHER','OUGHT','PAINT','PANEL','PAPER','PARTY','PEACE','PETER','PHASE','PHONE','PHOTO','PIECE','PILOT','PITCH','PLACE','PLAIN','PLANE','PLANT','PLATE','POINT','POUND','POWER','PRESS','PRICE','PRIDE','PRIME','PRINT','PRIOR','PRIZE','PROOF','PROUD','PROVE','QUEEN','QUICK','QUIET','QUITE','RADIO','RAISE','RANGE','RAPID','RATIO','REACH','READY','REFER','RIGHT','RIVAL','RIVER','ROBIN','ROGER','ROMAN','ROUGH','ROUND','ROUTE','ROYAL','RURAL','SCALE','SCENE','SCOPE','SCORE','SENSE','SERVE','SEVEN','SHALL','SHAPE','SHARE','SHARP','SHEET','SHELF','SHELL','SHIFT','SHIRT','SHOCK','SHOOT','SHORT','SHOWN','SIGHT','SINCE','SIXTH','SIXTY','SIZED','SKILL','SLEEP','SLIDE','SMALL','SMART','SMILE','SMITH','SMOKE','SOLID','SOLVE','SORRY','SOUND','SOUTH','SPACE','SPARE','SPEAK','SPEED','SPEND','SPENT','SPLIT','SPOKE','SPORT','STAFF','STAGE','STAKE','STAND','START','STATE','STEAM','STEEL','STICK','STILL','STOCK','STONE','STOOD','STORE','STORM','STORY','STRIP','STUCK','STUDY','STUFF','STYLE','SUGAR','SUITE','SUPER','SWEET','TABLE','TAKEN','TASTE','TAXES','TEACH','TEETH','TERRY','TEXAS','THANK','THEFT','THEIR','THEME','THERE','THESE','THICK','THING','THINK','THIRD','THOSE','THREE','THREW','THROW','TIGHT','TIMES','TIRED','TITLE','TODAY','TOPIC','TOTAL','TOUCH','TOUGH','TOWER','TRACK','TRADE','TRAIN','TREAT','TREND','TRIAL','TRIED','TRIES','TRUCK','TRULY','TRUST','TRUTH','TWICE','UNDER','UNDUE','UNION','UNITY','UNTIL','UPPER','UPSET','URBAN','USAGE','USUAL','VALID','VALUE','VIDEO','VIRUS','VISIT','VITAL','VOICE','WASTE','WATCH','WATER','WHEEL','WHERE','WHICH','WHILE','WHITE','WHOLE','WHOSE','WOMAN','WOMEN','WORLD','WORRY','WORSE','WORST','WORTH','WOULD','WOUND','WRITE','WRONG','WROTE','YIELD','YOUNG','YOUTH']


main();