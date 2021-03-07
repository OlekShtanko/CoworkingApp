using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DCoworking
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "int")]
        public int ownerId { get; set; }
        [Column(TypeName = "float")]
        public float lng { get; set; }
        [Column(TypeName = "float")]
        public float lat { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string adress { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string info { get; set; }
        public byte[] image { get; set; }
    }
}
