using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;

namespace Lights.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public int Rows { get; set; }

        public string[,] Lightbulbs =
        {
            {"#ff0000", "ONE" },
            {"#ffa500", "TWO" },
            {"#ffff00", "THREE" },
            {"#008000", "FOUR" },
            {"#0000ff", "FIVE" },
            {"#4b0082", "SIX" },
            {"#ee82ee", "SEVEN" }
        };

        
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Rows = 1;


        }

    }
}
