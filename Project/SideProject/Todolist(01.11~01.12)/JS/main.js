const todo_in = document.querySelector('.todo_input');
const todo_list = document.querySelector('.todo_list');
const routine_in = document.querySelector('.routine_input');
const routine_list = document.querySelector('.routine_list');
const info = document.querySelector('.guide');
const diary = document.querySelector('.diary_text');
var todo_index = 0;
var routine_index = 0;
var category = [];
var remove_index;
var todo = [];
var routine = [];
function init() {
    diary_fun();
    todo_in.focus();
    setTimeout(() => {
        todo_in.value="";
    }, 1000);
    routine_in.addEventListener('click', () => {
        routine_in.value = "";
    })
    setTimeout(()=>{
        update();
    }, 1000);
    info.value = "To-do List 사용법 \n\n 🟡카테고리로 분류가 가능해요❗ \n할 일을 작성한 후 '#카테고리명'을 이용해보세요❗\n Ex)책 반납하기#일상 \n(운동🏋️‍♀,학업✏️,건강❤️,구매💰,일상🔅️)\n \n 🟢완료된 일정에 체크 표시로 확인 할 수 있어요❗\n 할 일 목록에서 몇 번째 일을 끝냈는지와 '@'를 붙여주세요.\n Ex)1@ -> 첫 번째 할 일 완료처리✅\n\n🔵루틴 관리도 가능해요❗\n To-do List와 마찬가지로, '@'태그와 '#'을 이용할 수 있어요😊 \n 루틴 카테고리는 독서📚 건강❤️ 취미🔅로 분류할 수 있습니다.\n\n🔴한 줄 일기를 작성할 수 있어요❗\n 매일 기록된 일기들은 자동 저장되어서 한 번에 모아볼 수 있어요📚";
    addItem();
}

function update() {
    todo_list.value = "";
    for(var i=0; i<todo.length; i++) {
        todo_list.value += todo[i]+"\n";
    }
    routine_list.value = "";
    for(var i=0; i<routine.length; i++) {
        routine_list.value += routine[i]+"\n";
    }
}
function add_category_todo() {
    //#태그를 작성했다면,
    
        todo_list.value = "";
        category = todo_in.value.split('#');
        if(category.length===2) { //#태그가 들어있다면 
            if(category[1] === "운동") { //#운동
                todo_list.value += "🏋️‍♀️"+category[0]+"\n";
                todo_in.value = "";
            }
            else if(category[1] === "건강") { //#건강
                todo_list.value += "❤️"+category[0]+"\n";
                todo_in.value = "";
            }
            else if(category[1] === "학업") { //#학업
                todo_list.value += "✏️"+category[0]+"\n";
                todo_in.value = "";
            }
            else if(category[1] === "일상") { //#일상
                todo_list.value += "🔅"+category[0]+"\n";
                todo_in.value = "";
            }
            else if(category[1] === "구매") { //#구매
                todo_list.value += "💰"+category[0]+"\n";
                todo_in.value = "";
            }
    }
    else if (todo_in.value.endsWith("@")) { // 태그 사용X
        category = todo_in.value.replace("@", "");
        remove_index = parseInt(category);
        todo[remove_index-1] += "✅";
        todo_in.value = "";
    }
    else {
        todo_list.value += "🔥"+todo_in.value+"\n";
        todo_in.value = "";
    }
    var tmp = todo_list.value;
    todo[todo_index] = tmp; //save
    todo_index++;
    update();
}
function addItem() {
    todo_in.addEventListener('keydown', event=>{
        if(event.key == 'Enter') {
            add_category_todo();
        }
    })
    routine_in.addEventListener('keydown', event=>{
        if(event.key == 'Enter') {
            add_category_routine();
        }
    })
}
function add_category_routine() {
        routine_list.value = "";
        category = routine_in.value.split('#');
        if(category.length===2) { //#태그가 들어있다면 
            if(category[1] === "독서") { //#운동
                routine_list.value += "📚"+category[0]+"\n";
                routine_in.value = "";
            }
            else if(category[1] === "건강") { //#건강
                routine_list.value += "❤️"+category[0]+"\n";
                routine_in.value = "";
            }
            else if(category[1] === "취미") { //#학업
                routine_list.value += "🔅"+category[0]+"\n";
                routine_in.value = "";
            }
        }
        else if (routine_in.value.endsWith("@")) {
        category = routine_in.value.replace("@", "");
        remove_index = parseInt(category);
        routine[remove_index-1] += "✅";
        routine_in.value = "";
        }
        else {
        routine_list.value += "🔥"+ routine_in.value+"\n";
        routine_in.value = "";
        }
    var tmp = routine_list.value;
    routine[routine_index] = tmp; //save
    routine_index++;
    update();
}
function diary_fun() {
    diary.addEventListener('click', () => {
        if(diary.value === "한줄 일기를 작성해보세요.")
        diary.value = "";
    })
    diary.addEventListener('keydown', (event)=>{
        if(event.key == 'Enter') {
            alert(Date()+'\n 일기가 저장되었습니다📚');
            diary.value = "";
        }
    })
}
init();