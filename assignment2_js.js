			document.addEventListener('DOMContentLoaded', function(){
			
			
			document.querySelector("#new-task").onsubmit = function(){
				
				var x = 0;
				var tasks_array = Array();
				
				const li = document.createElement('li');
				
				let task_text = document.querySelector('#task').value;
				

		
				li.innerHTML = ` 
				<span id=${task_text + "priority"}>${task_text}</span>
				<label for="complete">Complete</label>
				<input type="radio" id="complete" name=${task_text} value="complete-task">
				<label for="pending">Pending</label>
				<input type="radio" id="pending" name=${task_text} value="pending-task" checked="True">		
				<button class = "complete"> Mark Complete </button>
				<button class = "remove">Remove </button>
				`;	
				
				document.querySelector("#tasks_list").append(li);
				document.querySelector("#task").value = ' ';
				
				function add_task () {
					tasks_array[x] = document.getElementById("task").value;
					x++;
				}
				console.log(task);				
				return false; 
				
				
			}
			
			
			
			document.addEventListener('click', function(event){
				element = event.target;
				if (element.className === 'remove'){
					element.parentElement.remove();
				}
			})
			document.addEventListener('click', function(event){
				element = event.target;
				if (element.className === 'complete'){					
				element.parentElement.style.setProperty("text-decoration", "line-through");
					element.remove();
					tasks_array.pop();
			}
			})
			
			document.querySelector("#task").onsubmit= function() {
					document.querySelector('#task').style.color = 
					document.querySelector("#priority").value;
					tasks_array.pop();
				}
			});