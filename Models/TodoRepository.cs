using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace TodoNetCoreAngular.Models
{
    public class TodoRepository
    {
        private readonly TodoDbContext context;

        public TodoRepository(TodoDbContext opt)
        {
            this.context = opt;
        }
        public TodoViewModel Addtodo(Todo todo)
        {
            context.Todo.Add(todo);
            context.SaveChanges();
            return new TodoViewModel { ID = todo.ID, Title = todo.Title, TotalItem = todo.TodoItem.Count };
        }
        public TodoViewModel Addtodoitem(int id, TodoItem todo)
        {
            var d = context.Todo.Find(id);
            d.TodoItem.Add(todo);
            context.SaveChanges();
            return new TodoViewModel { ID = d.ID, Title = d.Title, TotalItem = d.TodoItem.Count };
        }
        public IEnumerable<TodoViewModel> Get()
        {
            return context.Todo.Select(d => new TodoViewModel { ID = d.ID, Title = d.Title, TotalItem = d.TodoItem.Count }).ToList();
        }
        public IEnumerable<TodoItem> GetTodoItem(int id)
        {
            return context.TodoItem.Where(d => d.Todo.ID == id).Select(d => new TodoItem { ID = d.ID, Item = d.Item }).ToList();
        }
        public TodoViewModel Get(int id)
        {
            return context.Todo.Select(d => new TodoViewModel { ID = d.ID, Title = d.Title, TotalItem = d.TodoItem.Count }).SingleOrDefault(d => d.ID == id);
        }
    }

    public class TodoDbContext : DbContext
    {
        public DbSet<Todo> Todo { get; set; }
        public DbSet<TodoItem> TodoItem { get; set; }
        public TodoDbContext(DbContextOptions opt) : base(opt)
        {

        }
    }
    public class TodoViewModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int TotalItem { get; set; }
    }
    public class Todo
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public virtual List<TodoItem> TodoItem { get; set; }
        public Todo()
        {
            TodoItem = new List<TodoItem>();
        }
    }

    public class TodoItem
    {
        public int ID { get; set; }
        public string Item { get; set; }
        public virtual Todo Todo { get; set; }
    }
}