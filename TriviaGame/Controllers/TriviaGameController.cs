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

        [HttpGet("GetOneQuestion")]
        public async Task<ActionResult<List<QuestionsModel>>> GetOneQuestion()
        {
            IEnumerable<QuestionsModel> result = _context.QuestionsModels;
            int index = new Random().Next(1, result.Count() + 1);
            var oneQuestion = result.Where(x => x.Id == index);

            return Ok(oneQuestion);
        }

        [HttpGet("GetQuestion")]
        public async Task<ActionResult<List<QuestionsModel>>> GetQuestion()
        {
            return Ok(await _context.QuestionsModels.ToListAsync());
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
