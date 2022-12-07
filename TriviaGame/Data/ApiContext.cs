using Microsoft.EntityFrameworkCore;
using TriviaGame.Models;

namespace TriviaGame.Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
        public DbSet<QuestionsModel> QuestionsModels => Set<QuestionsModel>();
    }
}
