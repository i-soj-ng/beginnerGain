import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { ProjectDto } from '../dtos/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() projectDto: ProjectDto) {
    return await this.projectService.create(projectDto);
  }

  @Get()
  async getALl() {
    return await this.projectService.findAll();
  }
  @Get('/user/:id')
  async getProjectByUserId(@Param('id') id: string) {
    return await this.projectService.getProjectByUserId(id);
  }
  @Get(':id')
  async getProjectByProjectId(@Param('id') id: string) {
    return await this.projectService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.projectService.remove(id);
  }
}
