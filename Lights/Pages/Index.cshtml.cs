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
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public readonly string[,] LIGHTBULBS =
        {
            {"#ff0000", "LIGHTBULB - ONE" },
            {"#ffa500", "LIGHTBULB - TWO" },
            {"#ffff00", "LIGHTBULB - THREE" },
            {"#008000", "LIGHTBULB - FOUR" },
            {"#0000ff", "LIGHTBULB - FIVE" },
            {"#4b0082", "LIGHTBULB - SIX" },
            {"#ee82ee", "LIGHTBULB - SEVEN" }
        };

        public void OnGet()
        {
            
        }
    }
}
