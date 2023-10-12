using Microsoft.AspNetCore.Authorization;

namespace Backend.Requirement;

//class RbacRequirement : IAuthorizationRequirement
//{
//    public string Permission { get; }

//    public RbacRequirement(string permission)
//    {
//        Permission = permission ?? throw new ArgumentNullException(nameof(permission));
//    }
//}
public class HasScopeRequirement : IAuthorizationRequirement
{
    public string Issuer { get; }
    public string Scope { get; }

    public HasScopeRequirement(string scope, string issuer)
    {
        Scope = scope ?? throw new ArgumentNullException(nameof(scope));
        Issuer = issuer ?? throw new ArgumentNullException(nameof(issuer));
    }
}