using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UtopianChain.IdentityServer
{
    public static class ConfigurationIdentityServer
    {

        //public static IEnumerable<ApiScope> ApiScopes =>
        //    new List<ApiScope>
        //    {
        //        new ApiScope("OrdersAPI", "OrdersAPI")
        //    };

        public static IEnumerable<Client> GetClients() =>
            new List<Client>
            {
                        new Client
                        {
                            ClientId = "client_id_js",
                            RequireClientSecret = false,
                            RequireConsent = false,
                            RequirePkce = true,
                            //AllowedGrantTypes = GrantTypes.Code,
                            AllowedCorsOrigins = { "http://localhost:3000" },
                            //AllowedCorsOrigins = { "https://localhost:9001" },
                            //RedirectUris = { "http://localhost:3000/callback", "http://localhost:3000/refresh" },
                            //RedirectUris = { "https://localhost:9001/callback.html", "https://localhost:9001/refresh.html" },
                            //PostLogoutRedirectUris = { "http://localhost:3000" },
                            //PostLogoutRedirectUris = { "https://localhost:9001/index.html" },
                            AllowedScopes =
                            {
                                "OrdersAPI",
                                IdentityServerConstants.StandardScopes.OpenId,
                                IdentityServerConstants.StandardScopes.Profile,
                            },
                            ClientUri = "http://localhost:3000",
                            AllowedGrantTypes = GrantTypes.Implicit,
                            RedirectUris =
                            {
                                "http://localhost:3000/signin-oidc",
                            },
                            PostLogoutRedirectUris = { "http://localhost:3000/signout-oidc" },
                            AllowAccessTokensViaBrowser = true
                        },
                        //new Client
                        //{
                        //    ClientId = "client_id_swagger",
                        //    ClientSecrets = {new Secret("client_secret_swagger".Sha256())},
                        //    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                        //    AllowedCorsOrigins = { "https://localhost:7001" },
                        //    AllowedScopes =
                        //    {
                        //        "SwaggerAPI",
                        //        IdentityServerConstants.StandardScopes.OpenId,
                        //        IdentityServerConstants.StandardScopes.Profile,
                        //    }
                        //},
                        new Client
                        {
                            ClientId = "client_id",
                            ClientSecrets = {new Secret("client_secret".Sha256())},

                            AllowedGrantTypes = GrantTypes.ClientCredentials,

                            AllowedScopes =
                            {
                                "OrdersAPI"
                            }
                        },

                        //new Client
                        //{
                        //    ClientId = "client_id_mvc",
                        //    ClientSecrets = {new Secret("client_secret_mvc".Sha256())},

                        //    AllowedGrantTypes = GrantTypes.Code,

                        //    AllowedScopes =
                        //    {
                        //        "OrdersAPI",
                        //        IdentityServerConstants.StandardScopes.OpenId,
                        //        IdentityServerConstants.StandardScopes.Profile

                        //    },

                        //    RedirectUris = {"https://localhost:2001/signin-oidc"},
                        //    PostLogoutRedirectUris = {"https://localhost:2001/signout-callback-oidc"},

                        //    RequireConsent = false,

                        //    AccessTokenLifetime = 5,

                        //    AllowOfflineAccess = true,

                        //    //AlwaysIncludeUserClaimsInIdToken = true, // в id_token добавляем информацию из https://localhost:10001/connect/userinfo, но также они попадают в User Claims
                        //}
            };

        public static IEnumerable<ApiResource> GetApiResources() =>
            new List<ApiResource>
            {
                //new ApiResource("SwaggerAPI"),
                new ApiResource("OrdersAPI")
            };

        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
    }
}
