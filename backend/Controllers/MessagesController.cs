using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
[Route("api/messages")]
public class MessagesController : ControllerBase
{
    private readonly IMessageService _messageService;

    public MessagesController(IMessageService messageService)
    {
        _messageService = messageService;
    }

    [HttpGet("public")]
    public ActionResult<Message> GetPublicMessage()
    {
        return _messageService.GetPublicMessage();
    }

    [HttpGet("protected")]
  
    public ActionResult<Message> GetProtectedMessage()
    {
        return _messageService.GetProtectedMessage();
    }

    [HttpGet("admin")]
  
    public ActionResult<Message> GetAdminMessage()
    {
        return _messageService.GetAdminMessage();
    }
}