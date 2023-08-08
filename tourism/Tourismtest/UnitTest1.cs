using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using tourism.Controllers;
using tourism.Data;
using tourism.Models;
using tourism.Repository.Interfaces;
using tourism.Repository.Services;
using Xunit;

namespace tourism.Tests
{
    public class UserdetailControllerTests
    {
        [Fact]
        public async Task GetUserdetails_ReturnsOkResult()
        {
            // Arrange
            var mockRepo = new Mock<IUserdetail>();
            mockRepo.Setup(repo => repo.GetUserdetails())
                .ReturnsAsync(new List<Userdetail>());

            var controller = new UserdetailController(mockRepo.Object);

            // Act
            var result = await controller.GetUserdetails();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var model = Assert.IsAssignableFrom<IEnumerable<Userdetail>>(okResult.Value);
            Assert.Empty(model);
        }

        [Fact]
        public async Task AddAppointment_ReturnsOkResult()
        {
            // Arrange
            var mockRepo = new Mock<IUserdetail>();
            mockRepo.Setup(repo => repo.AddUserdetails(It.IsAny<Userdetail>()))
                .ReturnsAsync(new List<Userdetail>());

            var controller = new UserdetailController(mockRepo.Object);

            // Act
            var result = await controller.AddAppointment(new Userdetail());

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var model = Assert.IsAssignableFrom<IEnumerable<Userdetail>>(okResult.Value);
            Assert.Empty(model);
        }

        // Add similar tests for other controller methods
    }

   
}
