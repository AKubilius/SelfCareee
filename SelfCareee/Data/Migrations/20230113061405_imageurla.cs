using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SelfCareee.Data.Migrations
{
    public partial class imageurla : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "HairSalons",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "HairSalons");
        }
    }
}
