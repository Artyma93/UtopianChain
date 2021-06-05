using Microsoft.EntityFrameworkCore.Migrations;

namespace UtopianChain.API.Migrations
{
    public partial class ElectionsAddVotingOption : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "VotingOption",
                table: "Elections",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VotingOption",
                table: "Elections");
        }
    }
}
