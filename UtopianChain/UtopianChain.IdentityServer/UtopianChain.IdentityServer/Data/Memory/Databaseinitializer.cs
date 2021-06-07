using System;
using System.Security.Claims;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace UtopianChain.IdentityServer.Data
{
    public static class DatabaseInitializer
    {
        public static void Init(IServiceProvider scopeServiceProvider)
        {
            var userManager = scopeServiceProvider.GetService<UserManager<IdentityUser>>();


            var user = new IdentityUser
            {
                UserName = "User"
            };

            var result = userManager.CreateAsync(user, "123qwe").GetAwaiter().GetResult();
            if (result.Succeeded)
            {
                userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user1 = new IdentityUser
            {
                UserName = "User1"
            };

            var result1 = userManager.CreateAsync(user1, "123qwe").GetAwaiter().GetResult();
            if (result1.Succeeded)
            {
                userManager.AddClaimAsync(user1, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user1, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user2 = new IdentityUser
            {
                UserName = "User2"
            };

            var result2 = userManager.CreateAsync(user2, "123qwe").GetAwaiter().GetResult();
            if (result2.Succeeded)
            {
                userManager.AddClaimAsync(user2, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user2, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user3 = new IdentityUser
            {
                UserName = "User3"
            };

            var result3 = userManager.CreateAsync(user3, "123qwe").GetAwaiter().GetResult();
            if (result3.Succeeded)
            {
                userManager.AddClaimAsync(user3, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user3, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user4 = new IdentityUser
            {
                UserName = "User4"
            };

            var result4 = userManager.CreateAsync(user4, "123qwe").GetAwaiter().GetResult();
            if (result4.Succeeded)
            {
                userManager.AddClaimAsync(user4, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user4, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user5 = new IdentityUser
            {
                UserName = "User5"
            };

            var result5 = userManager.CreateAsync(user5, "123qwe").GetAwaiter().GetResult();
            if (result5.Succeeded)
            {
                userManager.AddClaimAsync(user5, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user5, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }

            var user6 = new IdentityUser
            {
                UserName = "User6"
            };

            var result6 = userManager.CreateAsync(user6, "123qwe").GetAwaiter().GetResult();
            if (result6.Succeeded)
            {
                userManager.AddClaimAsync(user6, new Claim(ClaimTypes.Role, "Administrator")).GetAwaiter().GetResult();
                userManager.AddClaimAsync(user6, new Claim(JwtClaimTypes.Scope, "OrdersAPI")).GetAwaiter().GetResult();
            }
        }
    }
}
