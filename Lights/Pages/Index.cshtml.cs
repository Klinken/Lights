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

        public readonly string[] HEX =
        { 
            "#ff0000", 
            "#ffa500", 
            "#ffff00", 
            "#008000",
            "#0000ff",
            "#4b0082",
            "#ee82ee"
        };

        public void OnGet()
        {
            
        }
    }
}
