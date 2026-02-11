using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bookify_API.Migrations
{
    /// <inheritdoc />
    public partial class FixResetColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "resetCode",
                table: "utilisateur",
                type: "varchar(6)",
                maxLength: 6,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "resetCodeExpiry",
                table: "utilisateur",
                type: "datetime",
                nullable: true);
        }


        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "resetCode",
                table: "utilisateur");

            migrationBuilder.DropColumn(
                name: "resetCodeExpiry",
                table: "utilisateur");
        }

    }
}
