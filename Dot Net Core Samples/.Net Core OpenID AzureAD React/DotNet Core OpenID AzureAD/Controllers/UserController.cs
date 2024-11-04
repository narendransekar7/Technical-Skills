using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace DotNet_Core_OpenID_AzureAD.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherController : ControllerBase
{
    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok("Authenticated user access");
    }
    [HttpGet("getallusers")]
    [Authorize]
    public IActionResult GetProfie()
    {
        return Ok("Authenticated user access");
    }
}