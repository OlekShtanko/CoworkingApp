using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DCoworkingFunction
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "int")]
        public int coworkingId { get; set; }
        [Column(TypeName = "bit")]
        public bool isTea { get; set; }
        [Column(TypeName = "float")]
        public float priceTea { get; set; }
        [Column(TypeName = "bit")]
        public bool isCoffee { get; set; }
        [Column(TypeName = "float")]
        public float priceCoffee { get; set; }
        [Column(TypeName = "bit")]
        public bool isTable { get; set; }
        [Column(TypeName = "float")]
        public float priceTable { get; set; }
        [Column(TypeName = "bit")]
        public bool isChair { get; set; }
        [Column(TypeName = "float")]
        public float priceChair { get; set; }
        [Column(TypeName = "bit")]
        public bool isSofa { get; set; }
        [Column(TypeName = "float")]
        public float priceSofa { get; set; }
        [Column(TypeName = "bit")]
        public bool isCola { get; set; }
        [Column(TypeName = "float")]
        public float priceCola { get; set; }

    }
}
