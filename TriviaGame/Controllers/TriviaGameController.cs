using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriviaGame.Data;
using TriviaGame.Models;
using Microsoft.EntityFrameworkCore;

namespace TriviaGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TriviaGameController : ControllerBase
    {
        private readonly ApiContext _context;

        public TriviaGameController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet("GetQuestion")]
        public async Task<ActionResult<List<QuestionsModel>>> GetOneQuestion(int id)
        {
            return Ok(await _context.QuestionsModels.Where(x => x.Id == id).FirstOrDefaultAsync());
        }

        [HttpPost("CreateQuestion")]
        public async Task<ActionResult<List<QuestionsModel>>> CreateQuestion(QuestionsModel question)
        {
            _context.QuestionsModels.Add(question);
            await _context.SaveChangesAsync();

            return Ok(await _context.QuestionsModels.ToListAsync());
        }

    }
}
