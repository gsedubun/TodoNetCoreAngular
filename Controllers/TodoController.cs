
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoNetCoreAngular.Models;

namespace TodoNetCoreAngular.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoRepository todos;

        public TodoController(TodoRepository _todos)
        {
            this.todos = _todos;

        }
        [HttpGet]
        [Route("[action]")]
        public IActionResult Index()
        {
            return Ok(todos.Get());
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult GetItem(int todoId)
        {
            var data = todos.GetTodoItem(todoId);
            return Ok(data);
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult Get(int id)
        {
            var data = todos.Get(id);
            return Ok(data);
        }
        [HttpPost]
        [Route("[action]")]
        public IActionResult Additem(int id, [FromBody] TodoItem todoItem)
        {
            var data = todos.Addtodoitem(id,todoItem);
            return Ok(data);
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult Addtodo([FromBody] Todo todo)
        {
 
            var data=                 todos.Addtodo(todo);;
            return Ok(data);
        }

    }


}