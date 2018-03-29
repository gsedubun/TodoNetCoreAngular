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
        public Todo Addtodo(Todo todo)
        {
            context.Todo.Add(todo);
            context.SaveChanges();
            return todo;
        }

        public IEnumerable<Todo> Get()
        {
            return context.Todo.ToList();
        }

        public Todo Get(int id)
        {
            return context.Todo.SingleOrDefault(d => d.ID == id);
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

    public class Todo
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public List<TodoItem> TodoItem { get; set; }
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