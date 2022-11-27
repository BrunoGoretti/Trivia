using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TriviaGame.Data;
using TriviaGame.Models;

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

        [HttpPost]
        [Route("CreateQuestion")]
        public JsonResult CreateQuestion(QuestionsModel question)
        {
            if (question.Id == 0)
            {
                _context.DbQuestions.Add(question);
            }
            else
            {
                var QuestionInDb = _context.DbQuestions.Find(question.Id);

                if (QuestionInDb == null)
                    return new JsonResult(NotFound());

                QuestionInDb = question;
            }

            _context.SaveChanges();
            return new JsonResult(Ok(question));
        }

        [HttpGet]
        [Route("GetQuestion")]
        public JsonResult GetQuestion(int id)
        {
            var result = _context.DbQuestions.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }
    }
}
