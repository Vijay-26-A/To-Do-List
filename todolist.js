let input = document.getElementById("input")
        let listitem = document.getElementById("listitem")

        function add(){
            let li = document.createElement("li")
            li.innerHTML=input.value + "<button class='delebtn' onclick='deleteitem(event)'>Button</button>"
            listitem.appendChild(li)
            if(input.value === ""){
                alert('Enter the Task first')
            }
            input.value = ""
        }
        function deleteitem(event){
            event.target.parentElement.remove()
        }
