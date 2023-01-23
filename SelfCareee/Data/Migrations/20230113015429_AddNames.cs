using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SelfCareee.Data.Migrations
{
    public partial class AddNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<bool>(
                name: "DoingItSelf",
                table: "Appointments",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "HairdresserName",
                table: "Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HairsalonName",
                table: "Appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DoingItSelf",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "HairdresserName",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "HairsalonName",
                table: "Appointments");

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
