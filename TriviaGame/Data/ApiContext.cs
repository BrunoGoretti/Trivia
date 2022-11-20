using Microsoft.EntityFrameworkCore;
using TriviaGame.Models;

namespace TriviaGame.Data
{
    public class ApiContext : DbContext
    {
        public DbSet<QuestionsModel> DbQuestions { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {

        }
    }
}
