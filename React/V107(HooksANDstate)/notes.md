Hooks are a type of functions
page doesnt reload everytime in react ,
use state is also a type of hook
const[count,setcount]=usestate(0)  , use state provides us a state(count) and a function which updates the state(setcount)
line means count naam ki state bnao and initial value =0 , ik function setcount jo iss count ko update kre

set video on 7:54 , explained , why some people think why cant we use this simple a value updating rather than our use state hook ,
in this js will update the value of a ,but it wont render it again once it has already been rendered before , but hook says if its updated using setcount,i will update wherever value is shown.