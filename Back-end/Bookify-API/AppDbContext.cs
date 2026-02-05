using System;
using System.Collections.Generic;
using Bookify_API.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace Bookify_API;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Fichier> Fichiers { get; set; }

    public virtual DbSet<Prestataire> Prestataires { get; set; }

    public virtual DbSet<RendezVou> RendezVous { get; set; }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<Utilisateur> Utilisateurs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;database=BookifyDB;user=root;password=2006", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.44-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Fichier>(entity =>
        {
            entity.HasKey(e => e.Idfichier).HasName("PRIMARY");

            entity.Property(e => e.DateUpload).HasDefaultValueSql("CURRENT_TIMESTAMP");

            entity.HasOne(d => d.IdRendezVousNavigation).WithMany(p => p.Fichiers)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fichier_ibfk_1");

            entity.HasOne(d => d.IdUtilisateurNavigation).WithMany(p => p.Fichiers)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fichier_ibfk_2");
        });

        modelBuilder.Entity<Prestataire>(entity =>
        {
            entity.HasKey(e => e.IdPres).HasName("PRIMARY");

            entity.HasOne(d => d.IdUtiliNavigation).WithMany(p => p.Prestataires)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("prestataire_ibfk_1");
        });

        modelBuilder.Entity<RendezVou>(entity =>
        {
            entity.HasKey(e => e.IdRendezVous).HasName("PRIMARY");

            entity.Property(e => e.DateCreation).HasDefaultValueSql("CURRENT_TIMESTAMP");
            entity.Property(e => e.Statut).HasDefaultValueSql("'EN_ATTENTE'");

            entity.HasOne(d => d.IdPresNavigation).WithMany(p => p.RendezVous)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("rendez_vous_ibfk_2");

            entity.HasOne(d => d.IdSerNavigation).WithMany(p => p.RendezVous)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("rendez_vous_ibfk_3");

            entity.HasOne(d => d.IdUtiliNavigation).WithMany(p => p.RendezVous)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("rendez_vous_ibfk_1");
        });

        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.IdService).HasName("PRIMARY");

            entity.HasOne(d => d.IdPresNavigation).WithMany(p => p.Services)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("service_ibfk_1");
        });

        modelBuilder.Entity<Utilisateur>(entity =>
        {
            entity.HasKey(e => e.IdUtilisateur).HasName("PRIMARY");

            entity.Property(e => e.CreerA).HasDefaultValueSql("CURRENT_TIMESTAMP");
            entity.Property(e => e.Role).HasDefaultValueSql("'CLIENT'");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
