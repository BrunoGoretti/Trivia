using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriviaGame.Data;
using TriviaGame.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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
        public ActionResult<List<QuestionsModel>> GetOneQuestion()
        {
            var dbModel = _context.QuestionsModels;
            List<QuestionsModel> result = dbModel.ToList();
            Random random = new Random();
            //var oneQuestion = result.Where(x => x.Id == index);
            int index = random.Next(0, result.Count());
            var randomValue = result.ElementAt(index);

            return Ok(randomValue);
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
